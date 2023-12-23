import { createContext, useContext } from "react";

export const themeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = themeContext.Provider;

export const useTheme = () => {
  return useContext(themeContext);
};
