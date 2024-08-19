import { ReactElement } from "react";
import { MainErrors } from "./main-errors";
import IValidationResult from "./i-validation-results";

export interface IFetchBase<DataType> {
  data: DataType | null;
  error: MainErrors | null;
  isLoading: boolean;
}

export interface IFetchState<DataType> extends IFetchBase<DataType> {
  setData: (data: DataType | null) => void;
  setError: (error: MainErrors | null) => void;
  setIsLoading: (isLoading: boolean) => void;
}

export interface IFetchDataGenProps<DataType> extends IFetchBase<DataType> {
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}

export interface IFetchDataParams<DataType, QueryParamsType>
  extends IFetchState<DataType> {
  url: string;
  params: QueryParamsType | null;
  validate: ((data: DataType) => IValidationResult) | null;
}
