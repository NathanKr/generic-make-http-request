import { IFetchBase } from "../../types/fetch-types";
import { Alert, CircularProgress } from "@mui/material";
import FetchDataGen from "./fetch-data-gen";

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

  return (
    <FetchDataGen
      successComponent={successComponent}
      errorComponent={errorComponent}
      loadingComponent={loadingComponent}
      data={data}
      error={error}
      isLoading={isLoading}
    />
  );
};

export default FetchDataDefault;
