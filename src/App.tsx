import axios from "axios";
import React from "react";

import "./App.css";

import { Provider } from "react-redux";
import { AppRouter } from "./AppRouter";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css";
import appConfig from "./config/app-config";

axios.defaults.baseURL = appConfig.endPoints.base;

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
