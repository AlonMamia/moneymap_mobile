import {StyleSheet} from 'react-native';
import {Theme} from '../../../../types/theme.ts';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    cardPadding: {
      paddingTop: 90,
      paddingBottom: 82,
    },
    loginButton: {
      backgroundColor: theme.common.colors.PRIMARY_GREEN,
      marginTop: 91,
      marginBottom: 19,
    },
    signUpButton: {
      marginTop: 19,
      marginBottom: 23,
      backgroundColor: theme.common.colors.LIGHT_GREEN,
    },
    centerText: {
      textAlign: 'center',
    },
    useFingerprintText: {
      textAlign: 'center',
      marginBottom: 28,
    },
    signUpWithText: {
      textAlign: 'center',
      marginBottom: 19,
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      gap: 17,
    },
    dontHaveAccountText: {
      marginTop: 20,
    },
  });
