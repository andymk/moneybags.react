import * as actionTypes from "./actionTypes";
import { IAppAction } from "../actions/IAppAction";

export const update = (payload: IAppAction) => ({
  type: actionTypes.UPDATE,
  payload
});
