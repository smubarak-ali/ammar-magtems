import React, { createContext, FC } from "react";

import { theme } from "styles/theme";

interface ThemeContextType {
    theme: typeof theme;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: theme,
});

export const ThemeProvider: FC = ({ children }) => {
    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
