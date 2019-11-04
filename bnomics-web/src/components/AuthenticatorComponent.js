import React from "react";
import { Authenticator as AWSAUTH } from "aws-amplify-react";

class AuthenticatorComponent extends React.Component {
  render() {
    return <AWSAUTH />;
  }
}

export default AuthenticatorComponent;
