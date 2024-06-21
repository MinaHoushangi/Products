import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {
  WINDOW_WIDTH,
  horizontalScale,
  verticalScale,
} from '@constants/dimensions';
import {Product} from 'src/types/Product';
import MyAppHeaderText from 'src/components/MyAppHeaderText';
import MyAppText from 'src/components/MyAppText';
import BackButton from '@components/BackButton';

function ProductDetailsScreen({route}) {
  const product: Product = route.params?.product;

  const [imageHeight, setImageHeight] = useState<number>(0);

  useEffect(() => {
    Image.getSize(product.image, (width, height) => {
      // Adjust the image size to fit the screen width while maintaining the aspect ratio
      const aspectRatio = width / height;
      setImageHeight(WINDOW_WIDTH / aspectRatio);
    });
  }, [product.image]);

  return (
    <ScrollView>
      <Image
        source={{uri: product.image, height: imageHeight, width: WINDOW_WIDTH}}
      />
      <BackButton />
      <View style={styles.descriptionContainer}>
        <MyAppHeaderText style={styles.text}>{product.name}</MyAppHeaderText>
        <MyAppText style={styles.text}>{product.description}</MyAppText>
        <MyAppText style={[styles.priceText, styles.text]}>
          {product.price}
        </MyAppText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    padding: horizontalScale(16),
  },
  priceText: {
    fontWeight: 'bold',
  },
  text: {
    marginTop: verticalScale(16),
  },
});

export default ProductDetailsScreen;
