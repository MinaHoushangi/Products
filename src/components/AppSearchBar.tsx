import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import {verticalScale} from 'src/constants/dimensions';
import {MyTheme} from 'src/types/theme';
import AppTextInput from './AppTextInput';

const SEARCH_BAR_HEIGHT = verticalScale(44);

function AppSearchBar({onChangeText, onClear, value = '', ...props}) {
  const theme = useTheme();

  return (
    <View style={styles(theme).container}>
      <Image
        source={require('@assets/images/icon-search.png')}
        style={styles(theme).iconSearch}
      />

      <AppTextInput onChangeText={onChangeText} value={value} {...props} />

      {value.length > 0 && (
        <TouchableWithoutFeedback onPress={onClear}>
          <Image
            source={require('@assets/images/icon-close.png')}
            style={styles(theme).iconClose}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = (theme: MyTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderColor: theme.colors.primary,
      borderRadius: SEARCH_BAR_HEIGHT / 2,
      borderWidth: 1.5,
      flexDirection: 'row',
      height: SEARCH_BAR_HEIGHT,
      paddingHorizontal: 10,
      width: '100%',
    },
    iconClose: {
      height: SEARCH_BAR_HEIGHT / 2,
      width: SEARCH_BAR_HEIGHT / 2,
      marginStart: 10,
    },
    iconSearch: {
      height: SEARCH_BAR_HEIGHT / 2,
      width: SEARCH_BAR_HEIGHT / 2,
      marginEnd: 10,
    },
  });

export default AppSearchBar;
