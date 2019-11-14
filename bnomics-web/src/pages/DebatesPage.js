import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import NewDebateThreadComponent from "../components/NewDebateThreadComponent";

class DebatePage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <NewDebateThreadComponent></NewDebateThreadComponent>
      </div>
    );
  }
}

export default DebatePage;
