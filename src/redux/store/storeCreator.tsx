import { compose, applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { routerMiddleware } from "connected-react-router";
import { appHistory } from "../../AppHistory";
import { rootReducer } from "../reducer/rootReducer";
import { getDefaultAppContainerState } from "../state/IAppState";
const epic = createEpicMiddleware();

const middlewareList = [epic, routerMiddleware(appHistory())];
const windowlfDefined = typeof window === "undefined" ? null : (window as any);
const composeEnhancers =
  windowlfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(...middlewareList));

const store = createStore(
  rootReducer(appHistory()),
  getDefaultAppContainerState(),
  middlewares
);

//epic.run(epics);

export default store;
