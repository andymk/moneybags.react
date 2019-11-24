import * as actionTypes from "./actionTypes";
import { IAppAction } from "../actions/IAppAction";

export const initialState = {
  isHydrated: false
};

export function reducer(state = initialState, action: IAppAction) {
  switch (action.type) {
    case actionTypes.UPDATE:
      return action.payload;
    default:
      return state;
  }
}
