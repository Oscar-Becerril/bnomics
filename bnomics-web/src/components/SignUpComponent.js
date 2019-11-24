import React from "react";
import { Auth } from "aws-amplify";
import { Form, Input, Notification, Checkbox } from "element-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class SignUpComponent extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSignUp = async () => {
    try {
      const user = await Auth.signIn(this.state.username, this.state.password);
    } catch (error) {
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
        <div className="flex-center signUpForm">
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
              <Form.Item label="Confirmar contraseña">
                <Input
                  value={password}
                  type="password"
                  placeholder="Contraseña"
                  onChange={password => this.setState({ password })}
                />
              </Form.Item>
              <div className="password-verification">
                <p>La contraseña tiene que tener por lo menos un numero</p>
                <p>
                  La contraseña tiene que tener por lo menos un caracter en
                  MAYUSCULAS
                </p>
                <p>
                  La contraseña tiene que tener por lo menos un caracter en
                  minusculas
                </p>
                <p>
                  La contraseña tiene que tener por lo menos un caracter
                  especial
                </p>
                <p>
                  La contraseña tiene que tener por lo menos un 8 caracteres
                </p>
              </div>
              <div>
                <Form.Item label="">
                  <span>
                    Aceptas nuestro
                    <Button
                      variant="link"
                      href="https://www.w3schools.com/html/"
                      className="forgotten-password"
                    >
                      Aviso de privacidad
                    </Button>
                  </span>
                  <Checkbox />
                </Form.Item>

                <Button
                  variant="primary"
                  onClick={this.handleSignUp}
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
              <span>no tienes cuenta con nosotros, haz click </span>
              <a
                href="https://www.w3schools.com/html/"
                className="forgotten-password"
              >
                aqui
              </a>
            </p>
            <Button
              variant="link"
              href="https://www.w3schools.com/html/"
              className="forgotten-password"
            >
              Olvide la contraseña
            </Button>
          </div>
          {/* <div>SignInComponent</div> */}
        </div>
      </>
    );
  }
}

export default SignUpComponent;
