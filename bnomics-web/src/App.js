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
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
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

// Context
export const UserContext = React.createContext();

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

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser().catch(err =>
      console.error(err)
    );
    this.setState({ user });
  };

  handleSignout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("Error siging out user", err);
    }
  };

  render() {
    const { user } = this.state;
    const Routes = ({ authState }) => (
      <UserContext.Provider value={{ user }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/debates" component={DebatesPage} />
          <Route path="/noticias" component={ArticlesPage} />
          <Route path="/editor" component={ArticleEditorPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/reader" component={ArticleReaderPage} />

          <ProtectedRoute
            exact
            path="/secret"
            render={() => <div>Keep it secret! Keep it safe!</div>}
            props={authState}
          />
        </Switch>
      </UserContext.Provider>
    );

    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <NavbarComponent user={user} handleSignout={this.handleSignout} />
          </div>
          <div className="App-content">
            <Routes authState={this.state.authState} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
