import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import {horizontalScale} from 'src/constants/dimensions';
import {MyTheme} from 'src/types/theme';

const BUTTON_WIDTH = 28;

function BackButton() {
  const theme = useTheme();
  const {goBack} = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={goBack}>
      <View style={styles(theme).container}>
        <Image
          source={require('@assets/images/icon-back.png')}
          style={styles(theme).image}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#ddd',
      borderColor: theme.colors.lightGrayBackground,
      borderRadius: horizontalScale(BUTTON_WIDTH / 2),
      borderWidth: 0.5,
      height: horizontalScale(BUTTON_WIDTH),
      justifyContent: 'center',
      marginStart: horizontalScale(10),
      marginTop: horizontalScale(10),
      opacity: 0.9,
      position: 'absolute',
      width: horizontalScale(BUTTON_WIDTH),
      zIndex: 1,
    },
    image: {
      resizeMode: 'contain',
      height: horizontalScale(BUTTON_WIDTH),
      width: horizontalScale(BUTTON_WIDTH),
    },
  });

export default BackButton;
