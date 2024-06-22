import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {MyTheme} from 'src/types/theme';

export default function ({...props}) {
  const theme: MyTheme = useTheme();

  return (
    <TextInput
      placeholderTextColor={theme.colors.textLight}
      style={styles(theme).input}
      {...props}
    />
  );
}

const styles = (theme: MyTheme) =>
  StyleSheet.create({
    input: {
      color: theme.colors.text,
      flex: 1,
    },
  });
