import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/authentication/screens/LoginScreen/LoginScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import AppScreens, {AppScreenParamList} from './AppScreens.ts';
import {SignUpScreen} from '../screens/authentication/screens/SignUpScreen/SignUpScreen.tsx';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen.tsx';
import {WelcomeScreen} from '../screens/WelcomeScreen/WelcomeScreen.tsx';
import {getNavigationTheme} from './NavigationTheme.ts';
import {useTheme} from '../theme/ThemeContext.tsx';
import {ForgotPasswordScreen} from '../screens/authentication/screens/ForgotPasswordScreen/ForgotPasswordScreen.tsx';
import {SecurityFingerprintScreen} from '../screens/authentication/screens/SecurityFingerprintScreen/SecurityFingerprintScreen.tsx';

const Stack = createNativeStackNavigator<AppScreenParamList>();

export const AppNavigator = () => {
  const theme = useTheme();
  const navigationTheme = getNavigationTheme(theme);

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          // options={{headerShown: false}}
          name={AppScreens.WELCOME_SCREEN}
          component={WelcomeScreen}
        />
        <Stack.Screen
          // options={{headerShown: false}}
          name={AppScreens.HOME_SCREEN}
          component={HomeScreen}
        />
        <Stack.Screen
          name={AppScreens.SIGN_UP_SCREEN}
          component={SignUpScreen}
        />
        <Stack.Screen name={AppScreens.LOG_IN_SCREEN} component={LoginScreen} />
        <Stack.Screen
          name={AppScreens.FORGOT_PASSWORD_SCREEN}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name={AppScreens.SECURITY_FINGERPRINT_SCREEN}
          component={SecurityFingerprintScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
