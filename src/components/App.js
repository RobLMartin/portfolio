import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import Frame from "./Frame/Frame";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

const theme = {
  about: { primary: "#ff5851", secondary: "#ff5851" },
  experience: { primary: "#f3c130", secondary: "#f8f8f8" },
  projects: { primary: "#414a6b", secondary: "#f8f8f8" }
};
const ThemeContext = React.createContext(theme);

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Router>
        <ThemeContext.Provider value={theme}>
          <Frame open={open} onClick={() => setOpen(!open)}>
            <Route exact path="/" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
          </Frame>
        </ThemeContext.Provider>
      </Router>
    </Layout>
  );
};

export { App, ThemeContext };

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
`;
