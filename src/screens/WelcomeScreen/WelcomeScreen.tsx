import {View} from 'react-native';
import styles from './styles.ts';
import {LogoContainer} from '../../components/logoContainer/LogoContainer.tsx';
import {useContext} from "react";
import {ThemeContext} from "../../theme/ThemeContext.tsx";
import {darkTheme} from "../../theme/themes/DarkTheme.ts";

export const WelcomeScreen = () => {
    return (
    <View style={styles.logoContainer}>
      <LogoContainer textStyle={styles.title} logoColor={darkTheme.colors.greenBar} />
    </View>
  );
};
