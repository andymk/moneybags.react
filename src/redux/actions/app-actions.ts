import { IAppAction } from "./IAppAction";

export const appActions = {
  APP_INITIALIZE: "APP_INITIALIZE"
};

export const appInitialise = (): IAppAction => ({
  type: appActions.APP_INITIALIZE,
  payload: null
});
