import {StyleSheet} from "react-native";
import {darkTheme} from "../../theme/themes/DarkTheme.ts";

const styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: darkTheme.colors.PRIMARY_GREEN,
    },
    title: {
        color: 'white',
    }
});

export default styles;
