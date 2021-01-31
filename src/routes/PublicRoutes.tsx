import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Login, ForgotPassword } from "../containers";

function PublicRoutes() {
  return (
    <Fragment>
      <Switch>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default PublicRoutes;
