import { combineReducers, Reducer } from "redux";
import {
  connectRouter,
  RouterState,
  LocationChangeAction
} from "connected-react-router";
import { History } from "history";
import { reducers } from "./reducers";

export const rootReducer = (history: History) =>
  combineReducers({
    ...reducers,
    router: (connectRouter(history) as unknown) as Reducer<
      RouterState,
      LocationChangeAction
    >
  });
