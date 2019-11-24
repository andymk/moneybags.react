import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import { Provider } from "react-redux";
import { AppRouter } from "./AppRouter";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

axios.defaults.baseURL = "http://localhost:5000/api";

// const store = createStore();

interface IAppProps {
  store: any;
}

const App = ({ store }: IAppProps) => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="wrapper">
          <AppRouter />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
