import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import Navigation from "./Navigation";
import { PortfolioContext } from "../../index";

const Frame = props => {
  const ANIMATION_SPEED = "0.6s";
  const ANIMATION_END_SPEED = "0.6s";
  const ANIMATION_DELAY = "0.1s";
  const portfolio = useContext(PortfolioContext);
  const [peek, setPeek] = useState(false);
  const [section, setSection] = useState();
  useEffect(() => {
    console.log("History Changed", props.history);
  }, [props.history]);

  return (
    <Layout>
      <Navigation
        speed={ANIMATION_SPEED}
        delay={ANIMATION_DELAY}
        endSpeed={ANIMATION_END_SPEED}
        {...props}
      />
      <TopBar
        speed={ANIMATION_SPEED}
        delay={ANIMATION_DELAY}
        endSpeed={ANIMATION_END_SPEED}
        animate={props.open}
      ></TopBar>
      <RightBar
        speed={ANIMATION_SPEED}
        delay={ANIMATION_DELAY}
        endSpeed={ANIMATION_END_SPEED}
        animate={props.open}
      />
      <BottomBar
        speed={ANIMATION_SPEED}
        delay={ANIMATION_DELAY}
        endSpeed={ANIMATION_END_SPEED}
        animate={props.open}
      />
      <Canvas
        speed={ANIMATION_SPEED}
        delay={ANIMATION_DELAY}
        endSpeed={ANIMATION_END_SPEED}
        animate={props.open}
      >
        {props.children}
      </Canvas>
      <BackDrop animate={props.open} onClick={props.handleOpen} />
    </Layout>
  );
};

export default withRouter(Frame);

const Layout = styled.div``;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${p => (p.animate ? "100px" : "30px")};
  width: 100%
  background-color: ${p => p.theme.frame.primary};
  transition: ${p =>
    p.animate
      ? "height " + p.speed + " " + p.delay + " cubic-bezier(1, 0, 0, 1)"
      : "height " + p.endSpeed + " cubic-bezier(1, 0, 0, 1)"};
  z-index: 4;
  `;

const RightBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: ${p => (p.animate ? "100px" : "30px")};
  background-color: ${p => p.theme.frame.primary};
  transition: ${p =>
    p.animate
      ? "width " + p.speed + " " + p.delay + " cubic-bezier(1, 0, 0, 1)"
      : "width " + p.endSpeed + " cubic-bezier(1, 0, 0, 1)"};
  z-index: 4;
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${p => (p.animate ? "100px" : "30px")};
  transition: ${p =>
    p.animate
      ? "height " + p.speed + " " + p.delay + " cubic-bezier(1, 0, 0, 1)"
      : "height " + p.endSpeed + " cubic-bezier(1, 0, 0, 1)"};
  width: 100%;
  background-color: ${p => p.theme.frame.primary};
  z-index: 4;
`;
const Canvas = styled.div`
  position: absolute;
  background-color: ${p => p.theme.base.primary};
  top: 30px;
  left: 30px;
  height: calc(100% - 60px);
  width: calc(100% - 60px);
  z-index: 1;
  transition: ${p =>
    "background-color " +
    p.speed +
    " " +
    p.delay +
    " cubic-bezier(1, 0, 0, 1)"};
`;
// ${p => (p.animate ? p.speed + " " + p.delay : p.endSpeed)} " cubic-bezier(1, 0, 0, 1)";

const BackDrop = styled.div`
  position: absolute;
  display: ${p => (p.animate ? "border-box" : "none")}
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
`;

const sectionHelper = section => {
  switch (section) {
    case "/experience":
      return "experience";
    case "/projects":
      return "projects";
    default:
      return "about";
  }
};
