import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardPage from "./pages/dashboard-page";
import LoginPage from "./pages/login/loginpage";
import { appHistory } from "./AppHistory";
import React from "react";
import AccountsPage from "./pages/accounts-page";
import TransactionsPage from "./pages/transactions";

export const AppRouter = () => {
  return (
    <ConnectedRouter history={appHistory()}>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/accounts" component={AccountsPage} />
        <Route
          path="/transactions/accounts/:accountid"
          component={TransactionsPage}
        />
      </Switch>
    </ConnectedRouter>
  );
};
