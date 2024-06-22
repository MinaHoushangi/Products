import React from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import MyAppHeaderText from './MyAppHeaderText';
import MyAppText from './MyAppText';
import {MyTheme} from 'src/types/theme';
import {horizontalScale, verticalScale} from '@constants/dimensions';

/**
 * Card component is to render list items generally (here a product)
 */

type CardProps = {
  imageUri: string;
  onPress: () => void;
  title: string;
  text: string;
};

const BORDER_RADIUS = 4;

function Card({imageUri, onPress, text = '', title = ''}: CardProps) {
  const theme = useTheme();

  const myStyles = styles(theme);

  const uri = imageUri
    ? {uri: imageUri}
    : require('@assets/images/placeholder-image.png');

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={myStyles.container}>
        <ImageBackground source={uri} style={myStyles.image} />
        <MyAppHeaderText style={myStyles.text}>{title}</MyAppHeaderText>
        <MyAppText style={myStyles.text}>{text}</MyAppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderRadius: BORDER_RADIUS,
      borderWidth: horizontalScale(0.5),
      padding: horizontalScale(6),
      shadowColor: theme.colors.primary,
      width: horizontalScale(161.5),
      marginHorizontal: 1,
      ...Platform.select({
        ios: {
          shadowOffset: {width: 6, height: 6},
          shadowOpacity: 0.8,
          shadowRadius: 4,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    image: {
      alignSelf: 'center',
      backgroundColor: theme.colors.lightGrayBackground,
      borderRadius: BORDER_RADIUS,
      height: horizontalScale(161.5),
      resizeMode: 'cover',
      width: '100%',
    },
    text: {
      fontWeight: 'bold',
      marginTop: verticalScale(8),
    },
  });

export default Card;
