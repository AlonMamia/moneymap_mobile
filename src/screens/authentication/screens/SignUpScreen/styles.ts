import {StyleSheet} from 'react-native';
import {Theme} from '../../../../types/theme.ts';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    cardPadding: {
      paddingTop: 27,
      paddingBottom: 82,
    },
    inputFieldsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16,
      marginBottom: 28,
    },
    termsAndPrivacyPolicyText: {
      textAlign: 'center',
      margin: 'auto',
      maxWidth: '60%',
    },
    signUpButton: {
      backgroundColor: theme.common.colors.PRIMARY_GREEN,
      marginVertical: 12,
      marginHorizontal: 'auto',
    },
    alreadyHaveAccountText: {
      textAlign: 'center',
      margin: 'auto',
    },
  });
