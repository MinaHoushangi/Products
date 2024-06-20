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
    textDark: colors.light.textDark,
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
    textDark: colors.dark.textDark,
  },
};

export {MyLightTheme, MyDarkTheme};
