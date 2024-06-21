import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {verticalScale} from '@constants/dimensions';
import ListItemSeparator from './ListItemSeparator';

function ListFooter({isVisible = false}) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      {isVisible ? (
        <ActivityIndicator color={theme.colors.primary} size={40} />
      ) : (
        <ListItemSeparator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
  },
});

export default ListFooter;
