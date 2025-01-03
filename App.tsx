import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './src/theme/ThemeContext.tsx';
import {AppNavigator} from './src/navigation/AppNavigator.tsx';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  // const theme = useContext(ThemeContext);
  // const globalStyles = useMemo(() => GlobalStyles(theme), [theme]);

  return (
    // <SafeAreaView style={globalStyles.container}>
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default App;
