import {StyleSheet} from 'react-native';
import {Theme} from '../types/theme.ts';

export const GlobalStyles: globalStyles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.text,
    },
    title: {
      fontSize: 30,
      fontFamily: 'Poppins',
      color: theme.colors.text,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Poppins',
    },
    subText: {
      color: theme.colors.text,
      fontSize: 14,
      fontFamily: 'Regular',
    },
    paragraph: {
      color: theme.colors.text,
      fontSize: 12,
      fontFamily: 'Poppins',
    },

    // colors: {
    //     screenCover: theme.colors.screenCover,
    //     menuColor: theme.colors.menuColor,
    //     textColor: theme.colors.textColor,
    // }
  });
};
