import { combineReducers, Reducer } from "redux";
import {
  connectRouter,
  RouterState,
  LocationChangeAction
} from "connected-react-router";
import { History } from "history";
import loginReducer from "./loginReducer";

export const rootReducer = (history: History) =>
  combineReducers({
    loginReducer,
    router: (connectRouter(history) as unknown) as Reducer<
      RouterState,
      LocationChangeAction
    >
  });
