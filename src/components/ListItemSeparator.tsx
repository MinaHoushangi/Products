import React from 'react';
import {StyleSheet, View} from 'react-native';
import {verticalScale} from '@constants/dimensions';

function ListItemSeparator() {
  return <View style={styles.verticalSeparator} />;
}

const styles = StyleSheet.create({
  verticalSeparator: {
    height: verticalScale(16),
    width: '100%',
  },
});

export default ListItemSeparator;
