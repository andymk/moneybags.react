export interface IUser {
  userId: string;
  userName: string;
}

export interface IAppUser extends IUser {
  isAuthenticated: boolean;
  bearerToken: string;
  refreshToken: string;
}
