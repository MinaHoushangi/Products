import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {MyTheme} from 'src/types/theme';
import {horizontalScale, verticalScale} from '@constants/dimensions';
import Fade from './Fade';

/**
 * Placeholder for Card component
 */

const BORDER_RADIUS = 4;

function PlaceholderCard() {
  const theme = useTheme();

  const myStyles = styles(theme);

  return (
    <View style={myStyles.container}>
      <View style={myStyles.image}>
        <Fade />
      </View>
      <View style={myStyles.text}>
        <Fade />
      </View>
      <View style={myStyles.price}>
        <Fade />
      </View>
    </View>
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
      backgroundColor: theme.colors.accent,
      borderRadius: BORDER_RADIUS,
      height: horizontalScale(150),
      width: '100%',
    },
    price: {
      backgroundColor: theme.colors.accent,
      height: 16,
      marginTop: verticalScale(8),
      width: horizontalScale(150) / 2,
    },
    text: {
      backgroundColor: theme.colors.accent,
      height: 20,
      marginTop: verticalScale(8),
    },
  });

export default PlaceholderCard;
