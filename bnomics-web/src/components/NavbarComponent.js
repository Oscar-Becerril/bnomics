import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Nav, Navbar, Container, Image } from "react-bootstrap";

import { Auth } from "aws-amplify";

// Utils
import LinkButton from "../utils/LinkButton";

const NavbarComponent = ({ user, handleSignout }) => (
  <>
    <div className="navbar">
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand>
            <NavLink className="navbar-brand" to="/">
              <Image src={require("../img/bnomics-logo.png")} height="50em" />
              Bnomics
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            {!user ? (
              <>
                <Nav className="navbar-nav mr-auto">
                  <NavLink className="nav-link" to="/noticias">
                    Noticias
                  </NavLink>
                  <NavLink className="nav-link" to="/debates">
                    Debate
                  </NavLink>
                </Nav>
                <LinkButton to="/auth">Sign In</LinkButton>
              </>
            ) : (
              <>
                <Nav className="navbar-nav mr-auto">
                  <NavLink className="nav-link" to="/test">
                    Test
                  </NavLink>
                  <NavLink className="nav-link" to="/">
                    Debate
                  </NavLink>
                </Nav>
                <LinkButton type="warning" onClick={handleSignout}>
                  Sign Off
                </LinkButton>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  </>
);

export default NavbarComponent;
