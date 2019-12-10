import React from "react";
import { Auth } from "aws-amplify";
import { Form, Input, Notification, Checkbox } from "element-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Utils
import LinkButton from "../utils/LinkButton";

class SignUpComponent extends React.Component {
  state = {
    username: "",
    password: "",
    password2: "",
    passwordMatch: true,
    hasnum: null,
    hasMay: null,
    hasSpecial: null,
    hasMin: null,
    minimumLenght: 8,
    avisoPrivacidad: false
  };

  handlePasswordStrenghtVerification = () => {
    this.state.password === this.state.password2
      ? this.setState({ passwordMatch: true })
      : this.setState({ passwordMatch: false });
  };

  handleSignUp = async () => {
    try {
      const user = await Auth.signUp(this.state.username, this.state.password)
        .then(data => console.log(data))
        .catch(err => console.log(err));
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
    const { username, password, password2, passwordMatch } = this.state;
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
                  value={password2}
                  type="password"
                  placeholder="Contraseña"
                  onChange={password => this.setState({ password })}
                />
              </Form.Item>
              {/* password strenght verification messages */}
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
                <p display={!passwordMatch}>
                  Las contraseñas tiene que ser iguales
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
                <Button variant="outline-danger" onClick={this.handleSignUp}>
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
              <span>¿Ya tienes cuenta? haz click </span>
              <LinkButton to="/signup" variant="link">
                aquí
              </LinkButton>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SignUpComponent;
