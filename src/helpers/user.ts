import { IAppUser } from "../models/user";
import store from "../redux/store/storeCreator";
import { IAppState } from "../redux/state/IAppState";

export const user = (): IAppUser => {
  const state: IAppState = store.getState() as any;
  return state.User ? state.User : defaultUser;
};

export const defaultUser: IAppUser = {
  userId: "",
  userName: "",
  isAuthenticated: false,
  bearerToken: "",
  refreshToken: ""
};
