// Source: https://github.com/cypress-io/cypress-realworld-app/blob/babee8b15b0b41ba52bcff5d0e6cf47411324011/src/index.tsx#L1
import React from "react";
import { createRoot } from "react-dom/client";
import { Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import App from "./containers/App";
import { history } from "./utils/historyUtils";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#fff",
    },
  },
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>
);