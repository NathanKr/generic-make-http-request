import { IFetchBase } from "../../types/fetch-types";
import { Alert, CircularProgress } from "@mui/material";

// Declare UiFetchData as a generic component
const FetchDataDefault = <DataType,>({
  data,
  error,
  isLoading,
}: IFetchBase<DataType>) => {
  const successComponent = (
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
    );

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

export default FetchDataDefault;
