import {StyleSheet} from "react-native";
import {darkTheme} from "../../theme/themes/DarkTheme.ts";
import {lightTheme} from "../../theme/themes/LightTheme.ts";

export const styles = (theme) => {
    return StyleSheet.create({
        homeScreen: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            width: '100%',
            backgroundColor: theme.colors.loginCover,
            gap: 42,
            // display: 'flex',
            // flexDirection: 'column',
        },
        logoContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 3,
        },
        logoContainerText: {
            color: theme.colors.PRIMARY_GREEN,
        },
        logoContainerLogo: {
            color: '#4287f5',
        },
        loginContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
        },
        loginButton: {
            backgroundColor: theme.colors.PRIMARY_GREEN,
        },
        loginButtonText: {
            color: '#093030',
            fontSize: 20,
            fontWeight: 'semibold',
        },
        signUpButton: {
            backgroundColor: darkTheme.colors.textColor,
        },
        signUpButtonText: {
            color: lightTheme.colors.textColor,
            fontSize: 20,
            fontWeight: 'semibold',
        }
    });
}

