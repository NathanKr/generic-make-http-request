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
  const [data, isLoading, error] = useFetchData<DataType>(url, validate);
  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  if (isLoading) {
    return loadingComponent;
  }

  if (error) {
    return errorComponent;
  }

  return successComponent;
}

export default GenericFetchData;
