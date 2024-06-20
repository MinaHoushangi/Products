import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {MyTheme} from '@types/theme';

/**
 * Regular text component with custom style
 */

interface MyAppTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}

function MyAppText({children, style}: MyAppTextProps) {
  const theme: MyTheme = useTheme();

  return <Text style={[styles(theme).text, style]}>{children}</Text>;
}

const styles = (theme: MyTheme) =>
  StyleSheet.create({
    text: {
      color: theme.colors.text,
    },
  });

export default MyAppText;
