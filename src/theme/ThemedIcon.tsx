import React, { useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from '../theme/ThemeContext';
import {Image, ImageSourcePropType, ImageSize} from "react-native";

interface Props {
    source: ImageSourcePropType,
    size: number,
}

export const ThemedIcon = ({source, size = 24 }: Props) => {
    const theme = useContext(ThemeContext);

    return (
        <Image
            source={source}
            size={size}
            color={theme.colors.iconColor}
        />
    );
};
