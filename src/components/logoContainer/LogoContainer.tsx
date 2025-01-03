import {StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
// @ts-ignore
import Logo from '../../assets/icons/Logo.svg';
import styles from './styles.ts';

interface Props {
  logoStyle?: StyleProp<ViewStyle>;
  logoColor?: string;
  textStyle?: StyleProp<TextStyle>;
}

export const LogoContainer = ({logoStyle, textStyle, logoColor = '#000'}: Props) => {
  return (
    <>
      <Logo color={logoColor}/>
      <Text style={[styles.title, textStyle]}>MoneyMap</Text>
    </>
  );
};
