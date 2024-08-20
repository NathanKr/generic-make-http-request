import { ReactElement } from "react";
import { MainErrors } from "./main-errors";

export interface FetchState {
  error: MainErrors | null; // --- not error and completed means success
  isLoading: boolean;
  isCompleted: boolean;
}

export interface IFetchDataGenProps {
  state: FetchState;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}


