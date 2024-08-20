import { FC } from "react";
import { IFetchDataGenProps } from "../../types/fetch-types";

// Declare UiFetchData as a generic component
const FetchDataGen: FC<IFetchDataGenProps> = ({
  state,
  successComponent,
  loadingComponent,
  errorComponent,
}) => {
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
