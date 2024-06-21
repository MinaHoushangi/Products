import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {MyTheme} from 'src/types/theme';
import MyAppText from './MyAppText';

/**
 * Regular text component with custom style for headers
 */

interface MyAppHeaderTextProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

function MyAppHeaderText({children, style}: MyAppHeaderTextProps) {
  const theme: MyTheme = useTheme();

  return <MyAppText style={[styles(theme).text, style]}>{children}</MyAppText>;
}

const styles = (theme: MyTheme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.textDark,
      fontWeight: 'bold',
    },
  });

export default MyAppHeaderText;
