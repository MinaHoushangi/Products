import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import MyAppHeaderText from './MyAppHeaderText';
import MyAppText from './MyAppText';
import {MyTheme} from '@types/theme';
import {horizontalScale, verticalScale} from '@constants/dimensions';

/**
 * Card component is to render list items generally (here a product)
 */

type CardProps = {
  imageUri: string;
  title: string;
  text: string;
};

const BORDER_RADIUS = 4;

function Card({imageUri, text = '', title = ''}: CardProps) {
  const theme = useTheme();

  const myStyles = styles(theme);

  const uri = imageUri
    ? {uri: imageUri}
    : require('@assets/images/placeholder-image.png');

  return (
    <View style={myStyles.container}>
      <Image source={uri} style={myStyles.image} />
      <MyAppHeaderText style={myStyles.text}>{title}</MyAppHeaderText>
      <MyAppText style={myStyles.text}>{text}</MyAppText>
    </View>
  );
}

const styles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      borderColor: theme.colors.border,
      borderRadius: BORDER_RADIUS,
      borderWidth: horizontalScale(0.7),
      padding: horizontalScale(6),
      width: horizontalScale(160),
    },
    image: {
      alignSelf: 'center',
      borderRadius: BORDER_RADIUS,
      height: horizontalScale(160),
      width: '100%',
    },
    text: {
      fontWeight: 'bold',
      marginTop: verticalScale(8),
    },
  });

export default Card;
