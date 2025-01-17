import {Text, View} from 'react-native';
import {LogoContainer} from '../../components/logoContainer/LogoContainer.tsx';
import {useGlobalStyles} from '../../hooks/useGlobalStyles.ts';
import {styles} from './styles.ts';
import {useTheme} from '../../theme/ThemeContext.tsx';
import {RoundedButton} from '../../components/roundedButton/RoundedButton.tsx';
import AppScreens, {AppScreenProps} from '../../navigation/AppScreens.ts';

type Props = AppScreenProps<AppScreens.HOME_SCREEN>;

export const HomeScreen = ({navigation}: Props) => {
  const theme = useTheme();
  const globalStyles = useGlobalStyles(theme);
  const homeScreenStyles = styles(theme);

  return (
    <View style={homeScreenStyles.homeScreen}>
      <View style={homeScreenStyles.logoContainer}>
        <LogoContainer
          textStyle={homeScreenStyles.logoContainerText}
          logoColor={theme.common.colors.PRIMARY_GREEN}
        />
        <Text style={globalStyles.subText}>Manage your financial life!</Text>
      </View>
      <View style={homeScreenStyles.loginContainer}>
        <RoundedButton
          title={'Log In'}
          onPress={() =>
            navigation.navigate(AppScreens.LOG_IN_SCREEN)
          }
          buttonStyle={homeScreenStyles.loginButton}
          textStyle={homeScreenStyles.loginButtonText}
        />
        <RoundedButton
          title={'Sign Up'}
          onPress={() => navigation.navigate(AppScreens.SIGN_UP_SCREEN)}
          buttonStyle={homeScreenStyles.signUpButton}
          textStyle={homeScreenStyles.signUpButtonText}
        />
      </View>
    </View>
  );
};
