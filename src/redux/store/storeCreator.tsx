import { compose, applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware } from "connected-react-router";
import { appHistory } from "../../AppHistory";
import { rootReducer } from "../reducer/rootReducer";
import { getDefaultAppContainerState } from "../state/IAppState";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const epic = createEpicMiddleware();
const windowlfDefined = typeof window === "undefined" ? null : (window as any);
const composeEnhancers =
  windowlfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = [epic, routerMiddleware(appHistory())];
const middlewares = composeEnhancers(applyMiddleware(...middlewareList));

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer(appHistory())
);

const store = createStore(
  persistedReducer,
  getDefaultAppContainerState(),
  middlewares
);

export default store;
