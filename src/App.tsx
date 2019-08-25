import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.css";
import NavBar from "./components/navbar";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  );
};

export default App;
