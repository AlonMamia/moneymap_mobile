import React, {useContext, useMemo} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import {ThemeProvider} from './src/theme/ThemeContext.tsx';
import {AppNavigator} from './src/navigation/AppNavigator.tsx';
import {ThemeContext} from './src/theme/ThemeContext.tsx';
import {GlobalStyles} from './src/theme/globalStyles.ts';
import {darkTheme} from './src/theme/themes/DarkTheme.ts';
import {lightTheme} from './src/theme/themes/LightTheme.ts';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const theme = useContext(ThemeContext);
  const globalStyles = useMemo(() => GlobalStyles(theme), [theme]);
  const scheme = useColorScheme();

  return (
    <SafeAreaView style={globalStyles.container}>
      <AppNavigator theme={theme} />
    </SafeAreaView>
  );
};

export default App;
