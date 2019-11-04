import React from "react";
import AuthenticatorComponent from "../components/AuthenticatorComponent";

class AuthPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="conteinter">
        <AuthenticatorComponent />
      </div>
    );
  }
}

export default AuthPage;
