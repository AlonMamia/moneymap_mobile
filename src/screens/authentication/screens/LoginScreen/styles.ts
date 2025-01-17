import {StyleSheet} from 'react-native';
import {Theme} from '../../../../types/theme.ts';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    topMenu: {
      flex: 1,
    },
    welcomeText: {
      margin: 'auto',
      textAlign: 'center',
    },
    card: {
      flex: 3,
      paddingTop: 90,
      paddingBottom: 82,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardInsideContainer: {
      width: '80%',
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
