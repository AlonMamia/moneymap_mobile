import { useContext, useMemo } from 'react';
import { ThemeContext } from '../theme/ThemeContext.tsx';
import { GlobalStyles } from '../theme/globalStyles.ts';

export const useGlobalStyles = () => {
    const theme = useContext(ThemeContext);
    return useMemo(() => GlobalStyles(theme), [theme]);
};
