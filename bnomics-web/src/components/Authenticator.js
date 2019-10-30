import React from "react";
import { Authenticator as AWS_AUTH } from "aws-amplify-react";

class AuthenticatorComponent extends React.Component {
  render() {
    return <AWS_AUTH />;
  }
}

export default AuthenticatorComponent;
