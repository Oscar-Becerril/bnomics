import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = props => (
  <Route
    exact={props.exact}
    path={props.path}
    render={rProps =>
      props.props.isLoggedIn ? (
        <props.render exact={props.exact} />
      ) : (
        <Redirect to={`/auth`} />
      )
    }
    component={props.component}
  />
);

export default ProtectedRoute;
