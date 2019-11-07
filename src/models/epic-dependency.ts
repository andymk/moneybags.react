import { IServiceApi } from "./service-api";
import { IEndPointKeys } from "./endpoint";

export interface IEpicDependency {
  api: IServiceApi;
  endPointKeys: IEndPointKeys;
}
