import { ReactElement } from "react";
import { MainErrors } from "./main-errors";

export interface FetchState<DataType> {
  data: DataType | null;
  error: MainErrors | null;
  isLoading: boolean;
  isCompleted: boolean;
}

export interface IFetchDataGenProps<DataType> {
  state: FetchState<DataType>;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}

// export interface IFetchDataParams<DataType, QueryParamsType>
//   extends IFetchState<DataType> {
//   url: string;
//   params: QueryParamsType | null;
//   validate: ((data: DataType) => IValidationResult) | null;
// }
