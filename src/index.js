import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";


import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
