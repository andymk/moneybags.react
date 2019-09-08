import {
  compose,
  createStore as createReduxStore,
  applyMiddleware,
  createStore
} from "redux";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware } from "connected-react-router";
import { appHistory } from "../../AppHistory";

const epic = createEpicMiddleware();

const middlewareList = [epic, routerMiddleware(appHistory())];
const windowlfDefined = typeof window === "undefined" ? null : (window as any);
const composeEnhancers =
  windowlfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(...middlewareList));

const store = createStore(rootReducer(appHistory()), middlewares);

//epic.run(epics);

export { store };
