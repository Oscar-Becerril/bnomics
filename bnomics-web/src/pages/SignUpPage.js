import React from "react";
import SignUpComponent from "../components/SignUpComponent";

class SignUpPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="conteinter">
        {/* <AuthenticatorComponent /> */}
        <SignUpComponent />
      </div>
    );
  }
}

export default SignUpPage;
