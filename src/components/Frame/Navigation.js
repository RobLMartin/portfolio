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
              <StyledLink to="/">
                <Span isSelected={selected === "/"} {...theme.about}>
                  About
                </Span>
              </StyledLink>
            </NavItem>
            <NavItem onClick={() => setSelected("/experience")}>
              <StyledLink to="/experience">
                <Span
                  isSelected={selected.includes("/experience")}
                  {...theme.experience}
                >
                  Experience
                </Span>
              </StyledLink>
            </NavItem>
            <NavItem onClick={() => setSelected("/projects")}>
              <StyledLink to="/projects">
                <Span
                  isSelected={selected.includes("/projects")}
                  {...theme.projects}
                >
                  Project
                </Span>
              </StyledLink>
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
  color: ${p => (p.isSelected ? "white" : "inherit")};
  padding: 0 1em;
`;

const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
`;
