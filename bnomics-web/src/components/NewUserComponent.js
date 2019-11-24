import React from "react";
import { Auth } from "aws-amplify"
import { Button, Form, Input, Notification, Checkbox } from "element-react";

class NewUserComponent extends React.Component {
  state = {
    username: "",
  };

  render() {
    return (
      <>
       <Form>
         <h2 className="header">Bienvenido a Bnomics</h2>
       </Form>
      </>
    );
  }
}

export default NewUserComponent;
