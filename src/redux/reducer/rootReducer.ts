import { combineReducers, Reducer } from "redux";
import {
  connectRouter,
  RouterState,
  LocationChangeAction
} from "connected-react-router";
import { History } from "history";
import appContainerReducer from "./reducer";

export const rootReducer = (history: History) =>
  combineReducers({
    ...appContainerReducer,
    router: (connectRouter(history) as unknown) as Reducer<
      RouterState,
      LocationChangeAction
    >
  });
