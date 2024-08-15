import { ReactElement } from "react";
import IValidationResult from "./i-validation-results";

export default interface IFetchData<DataType, QueryParamsType> {
  url: string;
  params?: QueryParamsType;
  validate?: (data: DataType) => IValidationResult;
  setData: (data: DataType) => void;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}
