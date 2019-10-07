import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login/loginpage";
import { appHistory } from "./AppHistory";
import React from "react";

export const AppRouter = () => {
  return (
    <ConnectedRouter history={appHistory()}>
      <Route exact={true} path={"/"} component={HomePage} />
      <Route exact={true} path={"/login"} component={LoginPage} />
    </ConnectedRouter>
  );
};
