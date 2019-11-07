import { Observable, of } from "rxjs";
import { mergeMap, map, catchError, switchMap } from "rxjs/operators";
import { IAppAction } from "../actions/IAppAction";
import { ActionsObservable, StateObservable, ofType } from "redux-observable";
import { IAppState } from "../state/IAppState";
import { IEpicDependency } from "../../models/epic-dependency";
import {
  appActions,
  fnLoginSuccess,
  fnLoginError
} from "../actions/app-actions";
import { fnLogin } from "../actions/app-actions";
import { IAppUser } from "../../models/user";

// export const loginEpic = (
//   action$: ActionsObservable<IAppAction>,
//   state$: StateObservable<IAppState>,
//   { api, endPointKeys }: IEpicDependency
// ): Observable<IAppAction> =>
//   action$.pipe(
//     ofType(appActions.LOG_IN),
//     mergeMap(({ payload }) => {
//       let a = JSON.stringify(payload);
//       api.post(endPointKeys.base, "Authorise", a).pipe(
//         map(res => res.data),
//         map((user: IAppUser) => {
//           localStorage.setItem("token", user.token);
//           return fnLoginSuccess(user);
//         }),
//         catchError(error => {
//           return of(fnLoginError(error));
//         })
//       );
//     })
//   );
