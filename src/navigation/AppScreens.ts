import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum AppScreens {
  WELCOME_SCREEN = 'welcome',
  HOME_SCREEN = 'home',
  LOG_IN_SCREEN = 'LoginScreen',
  SIGN_UP_SCREEN = 'signup',
  FORGOT_PASSWORD_SCREEN = 'forgotPassword',
  SECURITY_FINGERPRINT_SCREEN = 'securityFingerprint',
}

export type AppScreenParamList = {
  [AppScreens.WELCOME_SCREEN]: undefined;
  [AppScreens.HOME_SCREEN]: undefined;
  [AppScreens.LOG_IN_SCREEN]: undefined;
  [AppScreens.SIGN_UP_SCREEN]: undefined;
  [AppScreens.FORGOT_PASSWORD_SCREEN]: undefined;
  [AppScreens.SECURITY_FINGERPRINT_SCREEN]: undefined;
};

export type AppScreenProps<T extends AppScreens> = {
  navigation: NativeStackNavigationProp<AppScreenParamList, T>;
  route: RouteProp<AppScreenParamList, T>;
};

export default AppScreens;
