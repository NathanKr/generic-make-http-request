import { useEffect } from "react";
import useFetchData from "../../hooks/use-fetch-data";
import IFetchData from "../../types/i-fetch-data";

function GenericFetchData<DataType>(props: IFetchData<DataType>) {
  const {
    url,
    validate,
    setData,
    successComponent,
    loadingComponent,
    errorComponent,
  } = props;
  const { data, isLoading, error } = useFetchData<DataType>(url, validate);
  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data, setData]);

  // ---- order is important !!!!

  if (isLoading) {
    return loadingComponent;
  }

  if (error) {
    return errorComponent;
  }

  if (!data) {
    // --- not ready
    return <></>;
  }

  return successComponent;
}

export default GenericFetchData;
