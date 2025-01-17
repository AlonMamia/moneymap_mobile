import {StyleSheet} from "react-native";
import {Theme} from "../../types/theme.ts";

export const layoutStyles = (theme: Theme) => StyleSheet.create({
    background: {
        backgroundColor: theme.colors.background,
        flex: 1,
    },
    layoutContainer : {
        justifyContent: 'space-between',
        display: 'flex',
        flex: 1,
        flexDirection:'column',
        width: '100%',
    },
    card: {
        backgroundColor: theme.colors.menuColor,
        borderRadius: 50,
        alignSelf: 'flex-end',
        width: '100%',
    },

});
