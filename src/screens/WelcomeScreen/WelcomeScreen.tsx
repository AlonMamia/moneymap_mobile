import {View} from 'react-native';
import styles from './styles.ts';
import {LogoContainer} from '../../components/logoContainer/LogoContainer.tsx';
import {useEffect} from 'react';
import {darkTheme} from '../../theme/themes/DarkTheme.ts';
import {AppScreenProps, AppScreens} from '../../navigation/AppScreens.ts';

type Props = AppScreenProps<AppScreens.WELCOME_SCREEN>;

export const WelcomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(AppScreens.HOME_SCREEN);
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.logoContainer}>
      <LogoContainer
        textStyle={styles.title}
        logoColor={darkTheme.colors.greenBar}
      />
    </View>
  );
};
