import {Text, View} from 'react-native';
import {RoundedTextInput} from '../../../../components/RoundedTextInput/RoundedTextInput.tsx';
import React from 'react';
import {useTheme} from '../../../../theme/ThemeContext.tsx';
import {styles} from './styles.ts';
import {useGlobalStyles} from '../../../../hooks/useGlobalStyles.ts';
import AppScreens, {AppScreenProps} from '../../../../navigation/AppScreens.ts';
import {AuthenticationLayout} from '../../components/AuthenticationLayout.tsx';
import {RoundedButton} from "../../../../components/roundedButton/RoundedButton.tsx";
import {Link} from "@react-navigation/native";

const SignUpScreen: React.FC<AppScreenProps<AppScreens.SIGN_UP_SCREEN>> = ({
  navigation,
  route,
}) => {
  const theme = useTheme();
  const signUpStyles = styles(theme);
  const globalStyles = useGlobalStyles();

  return (
    <AuthenticationLayout
      title={'Create Account'}
      cardStyle={signUpStyles.cardPadding}
      cardChildren={
      <>
        <View style={signUpStyles.inputFieldsContainer}>
          <RoundedTextInput
            theme={theme}
            inputType={'name'}
            globalStyles={globalStyles}
            label={'Full Name'}
            placeholder={'John Smith'}
          />
          <RoundedTextInput
            theme={theme}
            inputType={'emailAddress'}
            globalStyles={globalStyles}
            label={'Email'}
            placeholder={'example@example.com'}
          />
          <RoundedTextInput
            theme={theme}
            inputType={'telephoneNumber'}
            globalStyles={globalStyles}
            label={'Mobile Number'}
            placeholder={'+123 456 789'}
          />
          <RoundedTextInput
            theme={theme}
            inputType={'birthdate'}
            globalStyles={globalStyles}
            label={'Date Of Birth'}
            placeholder={'DD / MM / YYYY'}
          />
          <RoundedTextInput
            theme={theme}
            inputType={'password'}
            globalStyles={globalStyles}
            label={'Password'}
            placeholder={'******'}
          />
          <RoundedTextInput
            theme={theme}
            inputType={'password'}
            globalStyles={globalStyles}
            label={'Confirm Password'}
            placeholder={'******'}
          />
        </View>
        <Text style={[globalStyles.paragraph, signUpStyles.termsAndPrivacyPolicyText]}>
          By continuing, you agree to
          Terms of Use and Privacy Policy.
        </Text>
        <RoundedButton title={'Sign Up'} buttonStyle={signUpStyles.signUpButton} onPress={() => navigation.goBack()} />
        <Text style={[globalStyles.paragraph, signUpStyles.alreadyHaveAccountText]}>Already, have an account? <Link screen={'LoginScreen'}>Log In</Link></Text>
      </>
      }
    />
  );
};

export {SignUpScreen};
