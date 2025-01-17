import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {ThemeProvider, useTheme} from './src/theme/ThemeContext.tsx';
import {AppNavigator} from './src/navigation/AppNavigator.tsx';
import {useGlobalStyles} from './src/hooks/useGlobalStyles.ts';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const theme = useTheme();
  const globalStyles = useGlobalStyles(theme);
  // useEffect(() => {
  //     if (Platform.OS === 'android') {
  //         const {NavigationBar} = require('react-native-navigation-bar-color');
  //         NavigationBar.setImmersive(true); // Enable immersive mode
  //         NavigationBar.setNavigationBarColor('transparent'); // Transparent navigation bar
  //     }
  // }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar hidden />
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
