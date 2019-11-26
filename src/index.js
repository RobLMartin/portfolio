import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// const theme = {
//   about: { primary: "#2f3247", secondary: "#956ee5", frame: "#2b2e43" },
//   experience: { primary: "#f3c130", secondary: "#f8f8f8", frame: "white" },
//   projects: { primary: "#414a6b", secondary: "#f8f8f8", frame: "white" }
// };
const theme = {
  about: { primary: "#4c61ee", secondary: "#ff5851" },
  experience: { primary: "#4c61ee", secondary: "#f8f8f8" },
  projects: { primary: "#4c61ee", secondary: "#f8f8f8" },
  frame: { primary: "#1f2031" },
  base: { primary: "#1d1e2f" },
  font: "white"
};
// frame: { primary: "#292c40" },

const portfolio = {
  name: "rob"
};

export const PortfolioContext = React.createContext(portfolio);

ReactDOM.render(
  <PortfolioContext.Provider value={portfolio}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </PortfolioContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
