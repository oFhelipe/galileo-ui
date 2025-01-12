import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { GlobalStyle } from "../../styles/GlobalStyle";
export interface ThemeProviderProps {
  children: any;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle  />
      {children}
    </StyledThemeProvider>
  );
};
