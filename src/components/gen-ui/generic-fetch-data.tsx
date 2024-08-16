import { memo, useEffect } from "react";
import useFetchData from "../../hooks/use-fetch-data";
import IFetchData from "../../types/i-fetch-data";

function GenericFetchData<DataType, QueryParamsType>(
  props: IFetchData<DataType, QueryParamsType>
) {
  const {
    url,
    params,
    validate,
    setData,
    successComponent,
    loadingComponent,
    errorComponent,
  } = props;
  const { data, isLoading, error } = useFetchData<DataType, QueryParamsType>(
    url,
    validate ?? null, // Use null if validate is undefined
    params ?? ({} as QueryParamsType) // Provide a default empty object
  );
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

/* ---  use memo because i do not want to access the server only because the parent 
        has render and cause this component to render and re fetch from server
*/

export default memo(GenericFetchData); 
