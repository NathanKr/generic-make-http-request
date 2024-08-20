import { FetchState } from "../types/fetch-types";
import { MainErrors } from "../types/main-errors";

export const initialState: FetchState = {
  error: null,
  isLoading: false,
  isCompleted: false,
};

export type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_ERROR"; payload: MainErrors }
  | { type: "FETCH_COMPLETE" };

export function fetchReducer(state: FetchState, action: Action): FetchState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, isCompleted: false, error: null };
    case "FETCH_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    case "FETCH_COMPLETE":
      return { ...state, isCompleted: true, isLoading: false };
    default:
      return state;
  }
}
