import { IAppState, getDefaultAppContainerState } from "../state/IAppState";
import * as actions from "./actions";
import { actionTypes } from "./actionTypes";
import { IAppAction } from "../actions/IAppAction";

const handlers = {
  [actionTypes.LOG_IN_SUCCESS]: (
    state: IAppState,
    payload: any
  ): IAppState => ({
    ...state,
    User: payload
  }),
  [actionTypes.LOG_OUT]: (state: IAppState, payload: any): IAppState => ({
    ...state,
    User: null
  })
};

const sessionReducer = (
  state: IAppState = getDefaultAppContainerState(),
  action: IAppAction
) => {
  return handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action.payload)
    : state;
};

export default sessionReducer;
