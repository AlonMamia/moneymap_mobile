import {DefaultTheme, Theme as NavigationTheme} from '@react-navigation/native';
import {Theme} from '../types/theme.ts';

export const getNavigationTheme = (theme: Theme): NavigationTheme => ({
  ...DefaultTheme,
  dark: theme.isDark,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.background, // Screen background
    card: theme.colors.menuColor, // Header/Menu background
    text: theme.colors.text, // Text color
    primary: theme.common.colors.PRIMARY_GREEN, // Primary action color
  },
});
