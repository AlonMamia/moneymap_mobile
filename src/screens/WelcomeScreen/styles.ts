import {StyleSheet} from 'react-native';
import {darkTheme} from '../../theme/themes/DarkTheme.ts';

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '100%',
    width: '100%',
    //TODO: fix it to the theme PRIMIARY GREEN
    backgroundColor: darkTheme.common.colors.PRIMARY_GREEN,
  },
  title: {
    color: 'white',
  },
});

export default styles;
