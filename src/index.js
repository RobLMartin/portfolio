import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

const theme = {
  about: { primary: "#ff5851", secondary: "#ff5851" },
  experience: { primary: "#f3c130", secondary: "#f8f8f8" },
  projects: { primary: "#414a6b", secondary: "#f8f8f8" }
};

const portfolio = {
  name: "rob"
};

export const ThemeContext = React.createContext(theme);
export const PortfolioContext = React.createContext(portfolio);

ReactDOM.render(
  <PortfolioContext.Provider value={portfolio}>
    <ThemeContext.Provider value={theme}>
      <Router>
        <App />
      </Router>
    </ThemeContext.Provider>
  </PortfolioContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
