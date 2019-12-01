import { combineReducers, Reducer } from "redux";
import {
  connectRouter,
  RouterState,
  LocationChangeAction
} from "connected-react-router";
import { History } from "history";
import sessionReducer from "../session/sessionReducer";

export const rootReducer = (history: History) =>
  combineReducers({
    session: sessionReducer,
    router: (connectRouter(history) as unknown) as Reducer<
      RouterState,
      LocationChangeAction
    >
  });
