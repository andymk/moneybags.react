import { IAppAction } from "../actions/IAppAction";
import { actionTypes } from "./actionTypes";

export const fnLogin = (): IAppAction => ({
  type: actionTypes.LOG_IN,
  payload: null
});

export const fnLoginSuccess = (payload: any): IAppAction => ({
  type: actionTypes.LOG_IN_SUCCESS,
  payload
});

export const fnLoginError = (): IAppAction => ({
  type: actionTypes.LOG_IN_ERROR,
  payload: null
});

export const fnLogOut = (): IAppAction => ({
  type: actionTypes.LOG_OUT,
  payload: null
});
