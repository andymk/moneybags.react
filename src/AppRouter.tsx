import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login/loginpage";
import { appHistory } from "./AppHistory";
import React from "react";
import BudgetPage from "./pages/budget-page";
import TransactionsPage from "./pages/transactions";

export const AppRouter = () => {
  return (
    <ConnectedRouter history={appHistory()}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/budgets" component={BudgetPage} />
        <Route
          path="/transactions/accounts/:accountid"
          component={TransactionsPage}
        />
      </Switch>
      <Route render={() => <Redirect to="/" />} />
    </ConnectedRouter>
  );
};
