import {Text, View} from 'react-native';
import {LayoutWithCard} from '../../../../components/LayoutWithCard/LayoutWithCard.tsx';
import {styles} from './styles.ts';
import React from 'react';
import AppScreens, {AppScreenProps} from '../../../../navigation/AppScreens.ts';
import {useGlobalStyles} from '../../../../hooks/useGlobalStyles.ts';
import {RoundedTextInput} from '../../../../components/RoundedTextInput/RoundedTextInput.tsx';
import {RoundedButton} from '../../../../components/roundedButton/RoundedButton.tsx';
import {useTheme} from '../../../../theme/ThemeContext.tsx';
import {Link} from '@react-navigation/native';
import Google from '../../../../assets/icons/Google.svg';
import Facebook from '../../../../assets/icons/Facebook.svg';

const LoginScreen: React.FC<AppScreenProps<AppScreens.LOG_IN_SCREEN>> = ({
  navigation,
  route,
}) => {
  // const {theme} = route.params;
  const theme = useTheme();
  const globalStyles = useGlobalStyles(theme);
  const loginStyles = styles(theme);

  const loginHandler = () => {
    navigation.goBack();
  };

  const signUpHandler = () => {
    navigation.navigate(AppScreens.SIGN_UP_SCREEN);
  };

  return (
    <LayoutWithCard
      theme={theme}
      topMenuStyle={loginStyles.topMenu}
      topMenuChildren={
        <Text style={[globalStyles.title, loginStyles.welcomeText]}>
          Welcome
        </Text>
      }
      cardStyle={loginStyles.card}
      cardChildren={
        <View style={loginStyles.cardInsideContainer}>
          <RoundedTextInput
            theme={theme}
            inputType={'emailAddress'}
            globalStyles={globalStyles}
            label={'Username Or Email'}
            placeholder={'example@example.com'}
            containerStyle={{marginBottom: 23}}
          />
          <RoundedTextInput
            theme={theme}
            inputType={'password'}
            globalStyles={globalStyles}
            label={'Password'}
            placeholder={'password'}
          />
          <View style={{alignItems: 'center'}}>
            <RoundedButton
              title={'Login'}
              buttonStyle={loginStyles.loginButton}
              onPress={loginHandler}
            />
            <Link screen="forgotPassword" style={globalStyles.subText}>
              Forgot Password?
            </Link>
            <RoundedButton
              title={'Sign Up'}
              buttonStyle={loginStyles.signUpButton}
              onPress={signUpHandler}></RoundedButton>
            <Text
              style={[globalStyles.subText, loginStyles.useFingerprintText]}>
              Use <Link screen="securityFingerprint">Fingerprint</Link> To
              Access
            </Text>
            <Text style={[globalStyles.paragraph, loginStyles.signUpWithText]}>
              or sign up with
            </Text>
            <View style={loginStyles.iconContainer}>
              <Facebook color={theme.colors.text} />
              <Google color={theme.colors.text} />
            </View>
            <Text
              style={[globalStyles.subText, loginStyles.dontHaveAccountText]}>
              Don't have an account? <Link screen="signup">Sign Up</Link>
            </Text>
          </View>
        </View>
      }
    />
  );
};

export {LoginScreen};
