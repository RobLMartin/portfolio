import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../index";

const Navigation = props => {
  const [selected, setSelected] = useState(props.history.location.pathname);
  const theme = useContext(ThemeContext);

  return (
    <SideBar onClick={() => props.onClick()} animate={props.open} {...props}>
      <NavList animate={props.open} {...props}>
        {props.open && (
          <>
            <NavItem onClick={() => setSelected("/")}>
              <Link to="/">
                <Span isSelected={selected === "/"} {...theme.about}>
                  About
                </Span>
              </Link>
            </NavItem>
            <NavItem onClick={() => setSelected("/experience")}>
              <Link to="/experience">
                <Span
                  isSelected={selected.includes("/experience")}
                  {...theme.experience}
                >
                  Experience
                </Span>
              </Link>
            </NavItem>
            <NavItem onClick={() => setSelected("/projects")}>
              <Link to="/projects">
                <Span
                  isSelected={selected.includes("/projects")}
                  {...theme.projects}
                >
                  Project
                </Span>
              </Link>
            </NavItem>
          </>
        )}
      </NavList>
    </SideBar>
  );
};
export default Navigation;

const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${p => (p.animate ? " 80%" : "30px")};
  height: 100%;
  background-color: white;
  transition: ${p =>
    p.animate
      ? "width " + p.speed + " " + p.delay + " ease-in"
      : "width " + p.endSpeed + " ease-in"};
  &:hover {
    width: ${p => !p.animate && "50px"};
  }
  z-index: 2;
`;

const NavList = styled.div`
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;
  position: relative;
  width: ${p => (p.animate ? "400px" : "0")};
  margin: 100px auto auto 100px;
  transition: ${p =>
    p.animate
      ? "width " + p.speed + " " + p.delay + " ease-in"
      : "width " + p.endSpeed + "ease-in"};
  white-space: nowrap;
`;

const NavItem = styled.div``;

const Span = styled.span`
  background: ${p => (p.isSelected ? p.primary : "none")};
  padding: 0 1em;
`;
