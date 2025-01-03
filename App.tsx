import React, {useContext, useEffect, useMemo, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeContext, ThemeProvider} from './src/theme/ThemeContext.tsx';
import {WelcomeScreen} from './src/screens/WelcomeScreen/WelcomeScreen.tsx';
import {GlobalStyles} from './src/theme/globalStyles.ts';
import {HomeScreen} from "./src/screens/HomeScreen/HomeScreen.tsx";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>

      <AppContent />
      </NavigationContainer>
    </ThemeProvider>
  );
}

// Correctly Access Theme After Provider is Applied
const AppContent = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const theme = useContext(ThemeContext); // Theme is now available
  const globalStyles = useMemo(() => GlobalStyles(theme), [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      {isSplashVisible ? <WelcomeScreen /> : <HomeScreen/>}
    </SafeAreaView>
  );
};

export default App;
