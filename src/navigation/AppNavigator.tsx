import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/authentication/LoginScreen/LoginScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import AppScreens, {AppScreenParamList} from './AppScreens.ts';
import {SignUpScreen} from '../screens/authentication/SignUpScreen/SignUpScreen.tsx';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen.tsx';
import {WelcomeScreen} from '../screens/WelcomeScreen/WelcomeScreen.tsx';
import {getNavigationTheme} from "./NavigationTheme.ts";
import {useContext} from "react";
import {ThemeContext} from "../theme/ThemeContext.tsx";

const Stack = createNativeStackNavigator<AppScreenParamList>();

interface AppNavigatorProps {
  theme: {
    isDark: boolean;
    colors: {
      screenCover: string;
      menuColor: string;
      textColor: string;
      PRIMARY_GREEN: string;
      loginCover: string;
    };
  };
}

export const AppNavigator: React.FC<AppNavigatorProps> = () => {
  const theme = useContext(ThemeContext);
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
