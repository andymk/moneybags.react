import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";

import NavBar from "./components/navbar";
import HomePage from "./pages/home";
import LoginPage from "./pages/login/loginpage";

axios.defaults.baseURL = "http://localhost:5000/api";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <div className="container">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </div>
      </main>
    </Router>
  );
};

export default App;
