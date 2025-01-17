import {StyleSheet} from 'react-native';
import {Theme} from '../../types/theme.ts';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    mainTextInputContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 8,
    },
    textInputLabel: {
      color: theme.colors.text,
      marginLeft: 12,
    },
    textInput: {
      marginLeft: 15,
      width: '85%',
    },
    textInputContainer: {
      borderRadius: 18,
      backgroundColor: theme.common.colors.LIGHT_GREEN,
      width: 357,
    },
  });
