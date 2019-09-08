import { IAppState } from "../state/IAppState";
import { appActions } from "../actions/app-actions";
import { IAppAction } from "../actions/IAppAction";

const handlers = {
  [appActions.APP_INITIALIZE]: (state: IAppState): IAppState => ({
    ...state
  })
};

const appContainerReducer = (
  state: IAppState = getDefaultAppContainerState(),
  action: IAppAction
) => {
  return handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action.payload)
    : state;
};

export default appContainerReducer;
