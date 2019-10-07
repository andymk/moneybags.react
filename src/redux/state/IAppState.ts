import { IUserState } from "./IUserState";

export interface IAppState {
  User: IUserState | null;
}

const defaultState: IAppState = {
  User: null
};

export const getDefaultAppContainerState = (options?: any) => {
  return { ...defaultState, ...options };
};
