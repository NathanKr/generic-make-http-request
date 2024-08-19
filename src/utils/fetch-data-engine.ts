// fetchData.js
import axios, { AxiosResponse } from "axios";
import IValidationResult from "../types/i-validation-results";
import { MainErrors } from "../types/main-errors";

export async function fetchDataEngine<DataType, QueryParamsType>(
  url: string,
  params: QueryParamsType | null,
  validate: ((data: DataType) => IValidationResult) | null,
  setData: (data: DataType) => void,
  setError: (error: MainErrors | null) => void,
  setIsLoading: (isLoading: boolean) => void
) {
  if (url) {
    try {
      setIsLoading(true);
      const res: AxiosResponse<DataType> = await axios.get(url, { params });
      setData(res.data);

      if (validate) {
        const validationResult = validate(res.data);
        if (validationResult && !validationResult.valid) {
          setError(MainErrors.Validation);
          console.error(validationResult.ajvErrors);
          return; // Return early if validation fails
        }
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(MainErrors.Ajax);
        console.error(err.response?.data || err.message);
      } else {
        setError(MainErrors.Unknown);
        console.error("Unknown error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  }
}
