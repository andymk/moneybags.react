import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/home";
import LoginPage from "./pages/login/loginpage";
import BudgetPage from "./pages/budget-page";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:5000/api";

// const store = createStore();

interface IAppProps {
  store: any;
}

const App = ({ store }: IAppProps) => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/budgets" component={BudgetPage} />
      </Router>
    </Provider>
  );
};

export default App;
