import { FetchState } from "../types/fetch-types";
import { MainErrors } from "../types/main-errors";

export type Action<DataType> =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: DataType }
  | { type: "FETCH_ERROR"; payload: MainErrors }
  | { type: "FETCH_COMPLETE" };

export function fetchReducer<DataType>(
  state: FetchState<DataType>,
  action: Action<DataType>
): FetchState<DataType> {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, isCompleted: false, error: null };
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "FETCH_COMPLETE":
      return { ...state, isCompleted: true };
    default:
      return state;
  }
}
