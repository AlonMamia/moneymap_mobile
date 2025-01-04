import React, {useContext, useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './src/theme/ThemeContext.tsx';
import {AppNavigator} from './src/navigation/AppNavigator.tsx';
import {ThemeContext} from './src/theme/ThemeContext.tsx';
import {GlobalStyles} from './src/theme/globalStyles.ts';

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

  return (
    <SafeAreaView style={globalStyles.container}>
      <AppNavigator theme={theme} />
    </SafeAreaView>
  );
};

export default App;
