import React from 'react';
import {StyleSheet, View} from 'react-native';

import {verticalScale} from '@constants/dimensions';
import ListItemSeparator from './ListItemSeparator';
import AppActivityIndicator from './AppActivityIndicator';

function ListFooter({isVisible = false}) {
  return (
    <View style={styles.container}>
      {isVisible ? <AppActivityIndicator /> : <ListItemSeparator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
  },
});

export default ListFooter;
