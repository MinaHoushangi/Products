import React from 'react';
import {ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

type AppActivityIndicatorProps = {
  isVisible?: boolean;
  style?: ViewStyle;
};

function AppActivityIndicator({
  isVisible = true,
  style,
}: AppActivityIndicatorProps) {
  const theme = useTheme();

  if (!isVisible) return null;

  return (
    <ActivityIndicator
      color={theme.colors.primary}
      size={44}
      style={[styles.indicator, style]}
    />
  );
}

const styles = StyleSheet.create({
  indicator: {
    alignSelf: 'center',
    zIndex: 10,
  },
});

export default AppActivityIndicator;
