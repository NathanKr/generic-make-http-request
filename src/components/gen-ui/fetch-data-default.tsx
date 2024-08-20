import { Alert, CircularProgress } from "@mui/material";
import FetchDataGen from "./fetch-data-gen";
import { FetchState } from "../../types/fetch-types";
import { FC } from "react";

export interface IProps {
  state: FetchState;
}

// Declare UiFetchData as a generic component
const FetchDataDefault: FC<IProps> = ({ state }) => {
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
      state={state}
    />
  );
};

export default FetchDataDefault;
