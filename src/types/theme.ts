export type Theme = {
  isDark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    menuColor: string;
    text: string;
  };
  common: {
    homeScreen: {
      backgroundColor: string;
    };
    colors: {
      PRIMARY_GREEN: string;
      LIGHT_GREEN: string;
    }
  };
};
