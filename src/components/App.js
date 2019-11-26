import React, { useState } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Frame from "./Frame/Frame";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/pro-light-svg-icons";

library.add(faBars);

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      <Frame open={open} handleOpen={() => setOpen(!open)}>
        <Route exact path="/" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
      </Frame>
    </Layout>
  );
};

export default App;

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  color: ${p => p.theme.font};
`;
