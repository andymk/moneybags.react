import { IAppUser } from "../../models/user";

export interface IAppState {
  User: IAppUser | null;
}

const defaultState: IAppState = {
  User: null
};

export const getDefaultAppContainerState = (options?: any) => {
  return { ...defaultState, ...options };
};
