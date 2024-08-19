import { useState } from "react";
import { MainErrors } from "../types/main-errors";
import { IFetchState } from "../types/fetch-types";

function useFetchState<DataType>(): IFetchState<DataType> {
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<MainErrors | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return { data, setData, error, setError, isLoading, setIsLoading };
}

export default useFetchState;
