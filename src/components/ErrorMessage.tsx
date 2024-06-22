import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {horizontalScale, verticalScale} from '@constants/dimensions';
import MyAppHeaderText from './MyAppHeaderText';
import MyAppText from './MyAppText';

function ErrorMessage({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={require('@assets/images/icon-reload.png')}
          style={styles.image}
        />
        <MyAppHeaderText>Oops! Something went wrong!</MyAppHeaderText>
        <MyAppText>Please try again later.</MyAppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginVertical: verticalScale(10),
  },
  image: {
    height: horizontalScale(40),
    marginVertical: verticalScale(10),
    width: horizontalScale(40),
  },
});

export default ErrorMessage;
