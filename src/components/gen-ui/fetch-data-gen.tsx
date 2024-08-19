import { Alert, CircularProgress } from "@mui/material";
import { IFetchDataGenProps } from "../../types/fetch-types";

// Declare UiFetchData as a generic component
const FetchDataGen = <DataType,>({
  data,
  error,
  isLoading,
  successComponent = (
    <Alert severity="success">This is an auccess alert — check it out!</Alert>
  ),
  loadingComponent = (
    <>
      Loading ...
      <CircularProgress />
    </>
  ),
  errorComponent = (
    <Alert severity="error">This is an error alert — check it out!</Alert>
  ),
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
