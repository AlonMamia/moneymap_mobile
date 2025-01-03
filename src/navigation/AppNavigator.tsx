import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/HomeScreen/HomeScreen.tsx';
import {LoginScreen} from '../screens/authentication/LoginScreen/LoginScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import AppScreens from "./AppScreens.ts";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={AppScreens.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={AppScreens.LOG_IN_SCREEN} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
