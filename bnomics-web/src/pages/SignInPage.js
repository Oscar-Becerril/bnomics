import React from "react";
import SignInComponent from "../components/SignInComponent";

class SignInPage extends React.Component {
  state = {};

  render() {
    return (
      <div className="conteinter">
        {/* <AuthenticatorComponent /> */}
        <SignInComponent />
      </div>
    );
  }
}

export default SignInPage;
