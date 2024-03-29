import React from "react";
import { Auth } from "aws-amplify";
import { Form, Input, Notification } from "element-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Utils
import LinkButton from "../utils/LinkButton";

class SignInComponent extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSignIn = async () => {
    try {
      const user = await Auth.signIn(this.state.username, this.state.password);
    } catch (err) {
      Notification({
        title: "Error",
        message:
          "Ocurrio un problema durante el inicio de sesion, verifica tu usuario y contraseña. Si esto sigue sucediendo",
        type: "error"
      });
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <>
        <div className="flex-center signInForm">
          <h2 className="header">
            <Image
              style={{ marginRight: 0 }}
              src={require("../img/bnomics-logo.png")}
              height="50em"
            ></Image>
            Bienvenido a Bnomics
          </h2>
          <div>
            <Form labelPosition="left" labelWidth="80px">
              <Form.Item label="Nombre de Usuario">
                <Input
                  value={username}
                  type="text"
                  placeholder="email"
                  onChange={username => this.setState({ username })}
                />
              </Form.Item>
              <Form.Item label="Contraseña">
                <Input
                  value={password}
                  type="password"
                  placeholder="Contraseña"
                  onChange={password => this.setState({ password })}
                />
              </Form.Item>
              <div>
                <Button
                  variant="primary"
                  onClick={this.handleSignIn}
                  disabled={!username || !password}
                >
                  Inciar Sesion
                </Button>
                <Button variant="outline-danger" onClick={this.handleSignIn}>
                  Cancelar
                </Button>
              </div>
              <Button
                className="facebook"
                //style={{ ...styles.button, ...styles.facebook }}
                onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}
              >
                <FaFacebook color="white" />
                <span> Sign in with Facebook</span>
              </Button>
              <Button
                variant="danger"
                //style={{ ...styles.button, ...styles.google }}
                onClick={() => Auth.federatedSignIn({ provider: "Google" })}
              >
                <FaGoogle color="white" />
                <span> Sign in with Google</span>
              </Button>
            </Form>
            <hr />
            <p style={{ fontSize: "1em" }}>
              ¿No tienes cuenta con nosotros? haz click
              <LinkButton
                style={{ fontSize: "1em" }}
                to="/signup"
                variant="link"
              >
                aquí
              </LinkButton>
            </p>
            <LinkButton
              style={{ fontSize: "1em" }}
              to="forgottenpassword"
              variant="link"
            >
              Olvide la contraseña
            </LinkButton>
          </div>
          {/* <div>SignInComponent</div> */}
        </div>
      </>
    );
  }
}

export default SignInComponent;
