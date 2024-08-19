import axios, { AxiosResponse } from "axios";
import IValidationResult from "../types/i-validation-results";
import { MainErrors } from "../types/main-errors";
import { Dispatch } from "react";
import { Action } from "../hooks/fetch-reducer";

export async function fetchDataEngine<DataType, QueryParamsType>(
  url: string,
  params: QueryParamsType | null,
  validate: ((data: DataType) => IValidationResult) | null,
  dispatch: Dispatch<Action<DataType>>
) {
  if (url) {
    try {
      dispatch({ type: "FETCH_START" });
      const res: AxiosResponse<DataType> = await axios.get(url, { params });
      dispatch({ type: "FETCH_SUCCESS", payload: res.data });

      if (validate) {
        const validationResult = validate(res.data);
        if (validationResult && !validationResult.valid) {
          dispatch({ type: "FETCH_ERROR", payload: MainErrors.Validation });
          console.error(validationResult.ajvErrors);
          return; // Return early if validation fails
        }
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        dispatch({ type: "FETCH_ERROR", payload: MainErrors.Ajax });
        console.error(err.response?.data || err.message);
      } else {
        dispatch({ type: "FETCH_ERROR", payload: MainErrors.Unknown });
        console.error("Unknown error:", err);
      }
    } finally {
      dispatch({ type: "FETCH_COMPLETE" });
    }
  }
}
