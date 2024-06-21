import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {
  SCREEN_PADDING,
  WINDOW_WIDTH,
  horizontalScale,
  verticalScale,
} from '@constants/dimensions';
import {Product} from 'src/types/Product';
import MyAppHeaderText from 'src/components/MyAppHeaderText';
import MyAppText from 'src/components/MyAppText';
import BackButton from '@components/BackButton';
import useApi from 'src/hooks/useApi';
import productDetailsApi from '@api/productDetails';

type Details = {
  description: string;
};

function ProductDetailsScreen({route}) {
  const product: Product = route.params?.product;

  const {request} = useApi(productDetailsApi.getProductList);

  const [imageHeight, setImageHeight] = useState<number>(0);
  const [details, setDetails] = useState<Details>({description: ''});

  const fetchProdunctDetals = async () => {
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
      // Adjust the image size to fit the screen width while maintaining the aspect ratio
      const aspectRatio = width / height;
      setImageHeight(WINDOW_WIDTH / aspectRatio);
    });

    fetchProdunctDetals();
  }, []);

  return (
    <ScrollView>
      <Image
        source={{uri: product.image, height: imageHeight, width: WINDOW_WIDTH}}
      />
      <BackButton />
      <View style={styles.descriptionContainer}>
        <MyAppHeaderText style={styles.text}>{product.name}</MyAppHeaderText>
        <MyAppText style={styles.text}>{details.description}</MyAppText>
        <MyAppText style={[styles.priceText, styles.text]}>
          {product.price}
        </MyAppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: horizontalScale(SCREEN_PADDING),
  },
  priceText: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: verticalScale(16),
  },
});

export default ProductDetailsScreen;
