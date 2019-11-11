import { Observable } from "rxjs";

export interface IServiceApi {
  get(apiEndPoint: string, url: string, data?: any): Observable<any>;
  post(apiEndPoint: string, url: string, data?: any): Observable<any>;
  put(apiEndPoint: string, url: string, data?: any): Observable<any>;
  delete(apiEndPoint: string, url: string, data?: any): Observable<any>;
}
