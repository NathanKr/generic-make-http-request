import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import IValidationResult from "../types/i-validation-results";
import { MainErrors } from "../types/main-errors";

export default function useFetchData<DataType>(
  url: string,
  validate: ((data: DataType) => IValidationResult) | null
): [DataType | undefined, boolean, MainErrors | null] {
  const [data, setData] = useState<DataType>();
  const [error, setError] = useState<MainErrors | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(getData, [url , validate]);

  function getData() {
    if (url) {
      // --- if '' i get an error so added this
      setIsLoading(true);
      axios
        .get(url)
        .then((res: AxiosResponse) => {
          setData(res.data);
          setIsLoading(false);
          if (validate) {
            const validationResult = validate(res.data);
            if (validationResult && !validationResult.valid) {
              setError(MainErrors.Validation);
              console.error(validationResult.ajvErrors);
            }
          }
        })
        .catch((err: AxiosError) => {
          setError(MainErrors.Ajax);
          setIsLoading(false);
          console.error(err);
        });
    }
  }

  return [data, isLoading, error];
}