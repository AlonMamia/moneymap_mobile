import React, {createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {darkTheme} from './themes/DarkTheme.ts';
import {lightTheme} from './themes/LightTheme.ts';
import {Theme} from "../types/theme.ts";

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

// Create a custom hook for easier access to the theme
export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
