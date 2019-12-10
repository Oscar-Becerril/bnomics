import React from "react";
import { Auth } from "aws-amplify";
import { Form, Input, Notification } from "element-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

// Utils
import LinkButton from "../utils/LinkButton";

class ForgottenPasswordPage extends React.Component {
  state = {
    username: ""
  };

  handleForgotPassword = async () => {
    // console.log(this.state.username);
    await Auth.forgotPassword(this.state.username)
      .then(data => {
        console.log(data);
        Notification({
          title: "Exito",
          message:
            "Se ha enviado un correo de recuperacion al correo ingresado",
          type: "success"
        });
      })
      .catch(err => {
        console.log(err);
        Notification({
          title: "Error",
          message: `Hubo un error al buscar el usuario: ${err.message}`,
          type: "error"
        });
      });
  };

  render() {
    const { username } = this.state;

    return (
      <>
        <div className="flex-center signInForm">
          <h2 className="header">
            <Image
              style={{ marginRight: 0 }}
              src={require("../img/bnomics-logo.png")}
              height="50em"
            ></Image>
            Olvidaste tu contraseña
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
              <div>
                <Button
                  variant="primary"
                  onClick={this.handleForgotPassword}
                  disabled={!username}
                >
                  Recuperar contraseña
                </Button>
                <Button variant="outline-danger">Cancelar</Button>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default ForgottenPasswordPage;
