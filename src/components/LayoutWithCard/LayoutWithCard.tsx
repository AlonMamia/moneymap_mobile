import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {layoutStyles} from './styles.ts';
import {Theme} from '../../types/theme.ts';

type Props = {
  topMenuChildren?: React.ReactNode;
  topMenuStyle?: StyleProp<ViewStyle>;
  cardChildren?: React.ReactNode;
  cardStyle?: StyleProp<ViewStyle>;
  theme: Theme;
};

const LayoutWithCard = ({
  topMenuChildren,
  topMenuStyle,
  cardChildren,
  cardStyle,
  theme,
}: Props) => {
  const styles = layoutStyles(theme);

  return (
    <View style={styles.layoutContainer}>
      <View style={topMenuStyle}>{topMenuChildren}</View>
      <View style={[styles.card, cardStyle]}>{cardChildren}</View>
    </View>
  );
};

export {LayoutWithCard};
