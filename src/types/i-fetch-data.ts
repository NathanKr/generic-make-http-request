import { ReactElement } from "react";
import IValidationResult from "./i-validation-results";

export default interface IFetchData<DataType> {
    url: string;
    validate: ((data: DataType) => IValidationResult) | null;
    setData: (data: DataType) => void;
    successComponent: ReactElement;
    errorComponent: ReactElement;
    loadingComponent: ReactElement;
  }