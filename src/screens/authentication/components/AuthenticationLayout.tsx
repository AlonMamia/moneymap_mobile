import {LayoutWithCard} from '../../../components/LayoutWithCard/LayoutWithCard.tsx';
import {useTheme} from '../../../theme/ThemeContext.tsx';
import {ReactNode} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './styles.ts';
import {useGlobalStyles} from '../../../hooks/useGlobalStyles.ts';

type Props = {
  title: string;
  cardChildren: ReactNode;
  cardStyle?: StyleProp<ViewStyle>;
};

export const AuthenticationLayout = ({
  cardChildren,
  title,
  cardStyle,
}: Props) => {
  const theme = useTheme();
  const globalStyles = useGlobalStyles();

  return (
    <LayoutWithCard
      theme={theme}
      topMenuStyle={styles.topMenu}
      topMenuChildren={
        <Text style={[globalStyles.title, styles.title]}>{title}</Text>
      }
      cardStyle={[styles.card, cardStyle]}
      cardChildren={<View style={styles.cardContent}>{cardChildren}</View>}
    />
  );
};
