import React from "react";

// Modules
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth, API, graphqlOperation } from "aws-amplify";

// Pages

import HomePage from "./pages/HomePage";
import DebatesPage from "./pages/DebatesPage";
import ArticleEditorPage from "./pages/ArticleEditorPage";
import ArticlesPage from "./pages/ArticlesPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import AuthPage from "./pages/AuthPage";
import ArticleReaderPage from "./pages/ArticleReaderPage";

// Components
import NavbarComponent from "./components/NavbarComponent";

// Mutations

// Queries
const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    posts {
      items {
        id
        postContent
        votes
        owner
      }
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;

class App extends React.Component {
  state = {
    authState: {
      isLoggedIn: false
    },
    user: null,
    newUser: true
  };

  componentDidMount() {
    this.getUserData();
  }

  // getUserData = async () => {
  //   const user = await Auth.currentAuthenticatedUser();
  //   user ? this.setState({ user }) : this.setState({ user: null });
  // };

  // onHubCapsule = capsule => {
  //   switch (capsule.payload.event) {
  //     case "signIn":
  //       console.log("signed In");
  //       break;
  //     case "signup":
  //       console.log("signed Up");
  //       break;
  //     case "signOut":
  //       console.log("signed Out");
  //       this.setState({ user: null });
  //       break;
  //     default:
  //       return;
  //   }
  // };
  // handleSignout = async () => {
  //   try {
  //     await Auth.signOut();
  //   } catch (err) {
  //     console.error("Error siging out user", err);
  //   }
  // };

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser().catch(err =>
      console.log(err)
    );

    // Check if user already has a profile
    const input = {
      username: user
    };
    const result = await API.graphql(
      graphqlOperation(getUser, input)
    ).catch(err => console.log(err));
    if (user) {
      try {
        user.attributes.sub === result.data.getUser.userID
          ? this.setState({ newUser: false })
          : this.setState({ newUser: true });
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("test2");
    }
  };

  render() {
    const Routes = ({ authState }) => (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/debates" component={DebatesPage} />
        <Route path="/noticias" component={ArticlesPage} />
        <Route path="/editor" component={ArticleEditorPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/reader" component={ArticleReaderPage} />

        <ProtectedRoute
          exact
          path="/secret"
          render={() => <div>Keep it secret! Keep it safe!</div>}
          props={authState}
        />
      </Switch>
    );

    return (
      <div className="App">
        <div className="App-header">
          <Router>
            <NavbarComponent />
            <Routes authState={this.state.authState} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
