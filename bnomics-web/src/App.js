import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DebatesPage from "./pages/DebatesPage";
import EditorPage from "./pages/EditorPage";
import ArticlesPage from "./pages/ArticlesPage";

class App extends React.Component {
  state = {
    user: null
  };

  // componentDidMount() {
  //   this.getUserData();
  //   Hub.listen("auth", this, "onHubCapsule");
  // }

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Router>
            <>
              {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
              <NavbarComponent />

              <Route exact path="/" component={HomePage} />

              <Route path="/debates" component={DebatesPage} />

              <Route path="/noticias" component={ArticlesPage} />

              <Route path="/editor" component={EditorPage} />
            </>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
