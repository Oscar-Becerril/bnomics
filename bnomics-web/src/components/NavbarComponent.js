import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Nav, Navbar, Container, Image } from "react-bootstrap";

import { Auth } from "aws-amplify";

class NavbarComponent extends React.Component {
  state = {
    user: null
  };

  render() {
    const { user } = this.state;
    return (
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
                  <Image
                    src={require("../img/bnomics-logo.png")}
                    height="50em"
                  />
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
                    <Button onClick={() => Auth.federatedSignIn()}>
                      Sign In
                    </Button>
                  </>
                ) : (
                  <Nav className="navbar-nav mr-auto">
                    <NavLink className="nav-link" to="/test">
                      Test
                    </NavLink>
                    <NavLink className="nav-link" to="/">
                      Debate
                    </NavLink>
                  </Nav>
                )}
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </div>
      </>
    );
  }
}

export default NavbarComponent;
