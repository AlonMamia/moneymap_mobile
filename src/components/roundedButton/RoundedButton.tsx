import {StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import './styles';
import {styles} from './styles.ts';

interface Props {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const RoundedButton = ({title, onPress, buttonStyle, textStyle}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.roundedButton, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.roundedButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export {RoundedButton};
