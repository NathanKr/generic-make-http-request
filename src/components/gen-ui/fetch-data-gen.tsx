import { FetchState, IFetchDataGenProps } from "../../types/fetch-types";

// Declare UiFetchData as a generic component
const FetchDataGen = <DataType,>({
  state,
  successComponent,
  loadingComponent,
  errorComponent,
}: IFetchDataGenProps<DataType>) => {
  if (state.isLoading) {
    return loadingComponent;
  }

  if (state.error) {
    return errorComponent;
  }

  if (!state.isCompleted) {
    // --- not ready
    return <></>;
  }

  return successComponent;
};

export default FetchDataGen;
