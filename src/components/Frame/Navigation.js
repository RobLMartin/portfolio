import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/pro-light-svg-icons";
const Navigation = props => {
  const [selected, setSelected] = useState(props.history.location.pathname);
  console.log(selected);
  return (
    <SidePanel animate={props.open} {...props}>
      <SideBar animate={props.open}>
        <Icon
          icon={props.open ? faTimes : faBars}
          onClick={props.handleOpen}
        ></Icon>
      </SideBar>
      <NavList animate={props.open} {...props} onClick={props.handleOpen}>
        {props.open && (
          <>
            <NavItem onClick={() => setSelected("/")}>
              <StyledLink to="/">
                <Span isSelected={selected === "/"} section="about">
                  About
                </Span>
              </StyledLink>
            </NavItem>
            <NavItem onClick={() => setSelected("/experience")}>
              <StyledLink to="/experience">
                <Span
                  isSelected={selected.includes("/experience")}
                  section="experience"
                >
                  Experience
                </Span>
              </StyledLink>
            </NavItem>
            <NavItem onClick={() => setSelected("/projects")}>
              <StyledLink to="/projects">
                <Span
                  isSelected={selected.includes("/projects")}
                  section="projects"
                >
                  Project
                </Span>
              </StyledLink>
            </NavItem>
          </>
        )}
      </NavList>
    </SidePanel>
  );
};
export default Navigation;

const SidePanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${p => (p.animate ? " 80%" : "30px")};
  height: 100%;
  background-color: ${p => p.theme.frame.primary};
  transition: ${p =>
    p.animate
      ? "width " + p.speed + " " + p.delay + " cubic-bezier(1, 0, 0, 1)"
      : "width " + p.endSpeed + " cubic-bezier(1, 0, 0, 1)"};
  z-index: 3;
`;

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  height: 30px;
  width: 30px;
  left: 23px;
  top: 50vh;
  z-index: 5;
  transition: width 0.3s ease-in;
`;

const SideBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  background-color: ${p => p.theme.frame.primary};
  transition: width 0.3s ease-in;
  z-index: 3;
  &:hover {
    width: 50px;
  }
  :after {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
  }

  &:hover ${Icon} {
    width: 50px;
  }
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
      ? "width " + p.speed + " " + p.delay + " cubic-bezier(1, 0, 0, 1)"
      : "width " + p.endSpeed + "cubic-bezier(1, 0, 0, 1)"};
  white-space: nowrap;
`;

const NavItem = styled.div``;

const Span = styled.span`
  background: ${p => (p.isSelected ? p.theme[p.section].primary : "none")};
  color: ${p => p.theme.font};
  padding: 0 1em;
  font-size: 2rem;
  &:hover {
    opacity: 0.8;
    color: ${p => p.theme.font};
    background: ${p => p.theme[p.section].primary};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;
