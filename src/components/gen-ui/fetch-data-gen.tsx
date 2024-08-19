import { IFetchDataGenProps } from "../../types/fetch-types";

// Declare UiFetchData as a generic component
const FetchDataGen = <DataType,>({
  data,
  error,
  isLoading,
  successComponent,
  loadingComponent,
  errorComponent,
}: IFetchDataGenProps<DataType>) => {
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
};

export default FetchDataGen;
