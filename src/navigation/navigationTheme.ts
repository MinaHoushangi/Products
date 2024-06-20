import {DarkTheme, DefaultTheme} from '@react-navigation/native';

import colors from '@theme/colors';

const MyLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.light.background,
    text: colors.light.text,
    border: colors.light.border,
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.dark.background,
    text: colors.dark.text,
    border: colors.dark.border,
  },
};

export {MyLightTheme, MyDarkTheme};
