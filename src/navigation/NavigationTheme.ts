import { DefaultTheme, Theme as NavigationTheme } from '@react-navigation/native';

interface AppTheme {
    isDark: boolean;
    colors: {
        screenCover: string;
        menuColor: string;
        textColor: string;
        PRIMARY_GREEN: string;
        loginCover: string;
    };
}

export const getNavigationTheme = (theme: AppTheme): NavigationTheme => ({
    ...DefaultTheme,
    dark: theme.isDark,
    colors: {
        ...DefaultTheme.colors,
        background: theme.colors.screenCover, // Screen background
        card: theme.colors.menuColor, // Header/Menu background
        text: theme.colors.textColor, // Text color
        primary: theme.colors.PRIMARY_GREEN, // Primary action color
    },
});
