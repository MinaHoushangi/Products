import React, {useEffect, useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {
  SCREEN_PADDING,
  WINDOW_WIDTH,
  horizontalScale,
  verticalScale,
} from '@constants/dimensions';
import {Product} from 'src/types/Product';
import MyAppHeaderText from '@components/MyAppHeaderText';
import MyAppText from '@components/MyAppText';
import BackButton from '@components/BackButton';
import useApi from 'src/hooks/useApi';
import productDetailsApi from '@api/productDetails';
import {MyTheme} from 'src/types/theme';
import AppActivityIndicator from '@components/AppActivityIndicator';

type Details = {
  description: string;
};

type ProductDetailsScreenProps = {
  route: {
    params: {
      product: Product;
    };
  };
};

function ProductDetailsScreen({route}: ProductDetailsScreenProps) {
  const theme: MyTheme = useTheme();
  const product: Product = route.params?.product;

  const {loading, request} = useApi(productDetailsApi.getProductList);

  const [imageHeight, setImageHeight] = useState<number>(360);
  const [details, setDetails] = useState<Details | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  const fetchProdunctDetails = async () => {
    try {
      const response = await request();
      if (!response || response.status !== 200) {
        throw new Error("Can't get product details");
      }

      setDetails({
        description: response.data?.body,
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    Image.getSize(product.image, (width, height) => {
      //   // Adjust the image size to fit the screen width while maintaining the aspect ratio
      const aspectRatio = width / height;
      setImageHeight(WINDOW_WIDTH / aspectRatio);
    });

    fetchProdunctDetails();
  }, []);

  return (
    <ScrollView>
      <ImageBackground
        source={{uri: product.image}}
        onLoadEnd={() => setImageLoading(false)}
        style={[
          {
            backgroundColor: theme.colors.primaryLight,
            height: imageHeight,
            width: WINDOW_WIDTH,
          },
          styles.image,
        ]}>
        {imageLoading && <AppActivityIndicator />}
      </ImageBackground>
      <BackButton />
      <View style={styles.descriptionContainer}>
        <MyAppHeaderText style={styles.text}>{product.name}</MyAppHeaderText>

        {details && (
          <>
            <MyAppText style={styles.text}>{details.description}</MyAppText>
            <MyAppText style={[styles.priceText, styles.text]}>
              {product.price}
            </MyAppText>
          </>
        )}

        {loading && <AppActivityIndicator style={styles.text} />}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: horizontalScale(SCREEN_PADDING),
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  priceText: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: verticalScale(16),
  },
});

export default ProductDetailsScreen;
