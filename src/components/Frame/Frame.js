import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import Navigation from "./Navigation";
import { ThemeContext } from "../App";

const Frame = props => {
  const ANIMATION_SPEED = "0.3s";
  const ANIMATION_END_SPEED = "0.2s";
  const ANIMATION_DELAY = "0.1s";
  const theme = useContext(ThemeContext);

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
      />
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
        {...theme[sectionHelper(props.history.location.pathname)]}
      >
        {props.children}
      </Canvas>
      <BackDrop />
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
  background-color: white;
  transition: ${p =>
    p.animate
      ? "height " + p.speed + " " + p.delay + " ease-in"
      : "height " + p.endSpeed + " ease-in"};
  z-index: 3;
  `;

const RightBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: ${p => (p.animate ? "100px" : "30px")};
  background-color: white;
  transition: ${p =>
    p.animate
      ? "width " + p.speed + " " + p.delay + " ease-in"
      : "width " + p.endSpeed + " ease-in"};
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: ${p => (p.animate ? "100px" : "30px")};
  transition: ${p =>
    p.animate
      ? "height " + p.speed + " " + p.delay + " ease-in"
      : "height " + p.endSpeed + " ease-in"};
  width: 100%;
  background-color: white;
  z-index: 3;
`;
const Canvas = styled.div`
  position: absolute;
  background-color: ${p => p.primary};
  top: 30px;
  left: 30px;
  height: calc(100% - 60px);
  width: calc(100% - 60px);
  z-index: 1;
  transition: ${p =>
    "background-color " + p.speed + " " + p.delay + " ease-in"};
`;
// ${p => (p.animate ? p.speed + " " + p.delay : p.endSpeed)} " ease-in";

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${p => p.color || "blue"};
  transition: background-color 1s ease-in;
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
