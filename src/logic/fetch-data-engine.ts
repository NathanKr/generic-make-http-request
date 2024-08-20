import axios, { AxiosResponse } from "axios";
import IValidationResult from "../types/i-validation-results";
import { MainErrors } from "../types/main-errors";
import { Dispatch } from "react";
import { Action } from "../hooks/fetch-reducer";

export async function fetchDataEngine<ResponseDataType, QueryParamsType>(
  url: string,
  params: QueryParamsType | null,
  validate: ((data: ResponseDataType) => IValidationResult) | null,
  dispatch: Dispatch<Action>
): Promise<ResponseDataType | null> {
  if (!url) {
    console.error("URL is required");
    dispatch({ type: "FETCH_ERROR", payload: MainErrors.InvalidUrl });
    return null; // Return null if URL is invalid
  }

  try {
    dispatch({ type: "FETCH_START" });
    const res: AxiosResponse<ResponseDataType> = await axios.get(url, {
      params,
    });

    if (validate) {
      const validationResult = validate(res.data);
      if (validationResult && !validationResult.valid) {
        dispatch({ type: "FETCH_ERROR", payload: MainErrors.Validation });
        console.error(validationResult.ajvErrors);
        return null; // Return null if validation fails
      }
    }

    dispatch({ type: "FETCH_COMPLETE" });
    return res.data; // Return the fetched data
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      dispatch({ type: "FETCH_ERROR", payload: MainErrors.Ajax });
      console.error(err.response?.data || err.message);
    } else {
      dispatch({ type: "FETCH_ERROR", payload: MainErrors.Unknown });
      console.error("Unknown error:", err);
    }
    return null; // Return null if an error occurs
  } finally {
    dispatch({ type: "FETCH_COMPLETE" }); // Ensure completion action is always dispatched
  }
}
