import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "105%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "105%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "105%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1em 7em;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 9;
  a {
    color: #fff;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    position: relative;
    margin-left: 5em;
  }
  @media (max-width: 1040px) {
    flex-direction: column;
    padding: 1em;
    #logo {
      display: inline-block;
      margin: 0.6em 0;
    }
    ul {
      padding: 0;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0.5em;
        margin-left: 2em;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -50%;
  left: 0%;
  @media (max-width: 360px) {
    bottom: -30%;
  }
`;
export default Nav;
