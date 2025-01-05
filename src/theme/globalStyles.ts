import {StyleSheet} from 'react-native';

export const GlobalStyles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.textColor,
    },
    title: {
      fontSize: 20,
      fontFamily: 'Poppins',
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Poppins',
    },
    subText: {
      color: theme.colors.textColor,
      fontSize: 14,
      fontFamily: 'Regular',
    },
    paragraph: {
      color: theme.colors.textColor,
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
