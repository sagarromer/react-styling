import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import { GlobalStyle, defaultTheme, darkTheme } from "./utils";

import { PrimaryButton , SecondaryButton, TertiaryButton } from './components/Buttons'


function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={() => setUseDarkTheme(true)}>
        dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={() => setUseDarkTheme(false)}>
        default theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <PrimaryButton>primary</PrimaryButton>
      <SecondaryButton>secondary</SecondaryButton>
      <TertiaryButton>tertiary</TertiaryButton>
      </div>
      
    </ThemeProvider>
  );
}

export default App;
