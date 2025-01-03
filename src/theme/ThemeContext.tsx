import React, {createContext} from 'react';
import {useColorScheme} from 'react-native';
import {darkTheme} from './themes/DarkTheme.ts';
import {lightTheme} from './themes/LightTheme.ts';

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
