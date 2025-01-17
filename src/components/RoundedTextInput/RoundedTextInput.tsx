import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {Theme} from '../../types/theme.ts';
import {GlobalStyles} from '../../types/globalStyles.ts';
import {styles} from './styles.ts';
import {lightTheme} from '../../theme/themes/LightTheme.ts';

type Props = {
  theme: Theme;
  globalStyles: GlobalStyles;
  label: string;
  placeholder: string;
  inputType: TextInputProps['textContentType'];
  containerStyle?: StyleProp<ViewStyle>;
};

export const RoundedTextInput = ({
  theme,
  globalStyles,
  label,
  placeholder,
  inputType,
  containerStyle,
}: Props) => {
  const roundedInputStyle = styles(theme);

  return (
    <View style={[roundedInputStyle.mainTextInputContainer, containerStyle]}>
      <Text style={[globalStyles.subtitle, roundedInputStyle.textInputLabel]}>
        {label}
      </Text>
      <View style={roundedInputStyle.textInputContainer}>
        <TextInput
          placeholder={placeholder}
          textContentType={inputType}
          placeholderTextColor={lightTheme.colors.text}
          style={roundedInputStyle.textInput}></TextInput>
      </View>
    </View>
  );
};
