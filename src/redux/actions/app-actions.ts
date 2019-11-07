import { IAppAction } from "./IAppAction";

export const appActions = {
  LOG_IN: "LOG_IN",
  LOG_IN_SUCCESS: "LOG_IN_SUCCESS",
  LOG_IN_ERROR: "LOG_IN_ERROR",
  LOG_OUT: "LOG_OUT"
};

export const fnLogin = (): IAppAction => ({
  type: appActions.LOG_IN,
  payload: null
});

export const fnLoginSuccess = (payload: any): IAppAction => ({
  type: appActions.LOG_IN_SUCCESS,
  payload
});

export const fnLoginError = (): IAppAction => ({
  type: appActions.LOG_IN_ERROR,
  payload: null
});

export const fnLogOut = (): IAppAction => ({
  type: appActions.LOG_OUT,
  payload: null
});
