import {StyleSheet} from 'react-native';
import {darkTheme} from '../../theme/themes/DarkTheme.ts';
import {lightTheme} from '../../theme/themes/LightTheme.ts';
import {Theme} from '../../types/theme.ts';

export const styles = (theme: Theme) => {
  return StyleSheet.create({
    homeScreen: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%',
      backgroundColor: theme.common.homeScreen.backgroundColor,
      gap: 42,
      // display: 'flex',
      // flexDirection: 'column',
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 3,
    },
    logoContainerText: {
      color: theme.common.colors.PRIMARY_GREEN,
    },
    logoContainerLogo: {
      color: '#4287f5',
    },
    loginContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      gap: 12,
    },
    loginButton: {
      backgroundColor: theme.common.colors.PRIMARY_GREEN,
    },
    loginButtonText: {
      color: '#093030',
    },
    signUpButton: {
      backgroundColor: darkTheme.colors.text,
    },
    signUpButtonText: {
      color: lightTheme.colors.text,
    },
  });
};
