import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const darkModeLS = localStorage.getItem("darkMode");
  const initialMode = darkModeLS ? JSON.parse(darkModeLS) : false;
  const [isDarkMode, setIsDarkMode] = useState(initialMode);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleDarkMode,
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
