import {Text, View} from 'react-native';
import {LogoContainer} from '../../components/logoContainer/LogoContainer.tsx';
import {useGlobalStyles} from '../../hooks/useGlobalStyles.ts';
import {styles} from './styles.ts';
import {useContext} from 'react';
import {ThemeContext} from '../../theme/ThemeContext.tsx';
import {RoundedButton} from '../../components/roundedButton/RoundedButton.tsx';

export const HomeScreen = ({navigation}) => {
  const theme = useContext(ThemeContext);
  const globalStyles = useGlobalStyles();
  const homeScreenStyles = styles(theme);

  const onLoginPress = () => {
  };

  const onSignUpPress = () => {};

  return (
    <View style={homeScreenStyles.homeScreen}>
      <View style={homeScreenStyles.logoContainer}>
        <LogoContainer
          textStyle={homeScreenStyles.logoContainerText}
          logoColor={theme.colors.PRIMARY_GREEN}
        />
        <Text style={globalStyles.subText}>Manage your financial life!</Text>
      </View>
      <View style={homeScreenStyles.loginContainer}>
        <RoundedButton
          title={'Log In'}
          onPress={onSignUpPress}
          buttonStyle={homeScreenStyles.loginButton}
          textStyle={homeScreenStyles.loginButtonText}
        />
        <RoundedButton
          title={'Sign Up'}
          onPress={onLoginPress}
          buttonStyle={homeScreenStyles.signUpButton}
          textStyle={homeScreenStyles.signUpButtonText}
        />
      </View>
    </View>
  );
};
