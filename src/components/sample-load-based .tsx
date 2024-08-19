import { Alert, CircularProgress } from "@mui/material";
import { useEffect, useReducer } from "react";
import { fetchDataEngine } from "../utils/fetch-data-engine";
import { Todo } from "../types/types";
import UiFetchDataGen from "./gen-ui/fetch-data-gen";
import { FetchState } from "../types/fetch-types";
import { fetchReducer } from "../hooks/fetch-reducer";

const initialState: FetchState<Todo[]> = {
  data: null,
  error: null,
  isLoading: false,
  isCompleted: false,
};

function SampleLoadBased() {
  const [state, dispatch] = useReducer(fetchReducer<Todo[]>, initialState);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos",
      params = null,
      validate = null;
    fetchDataEngine(url, params, validate, dispatch);
  }, []);

  return (
    <div>
      <UiFetchDataGen
        state={state}
        successComponent={
          <Alert severity="success">
            This is an auccess alert — check it out!
          </Alert>
        }
        loadingComponent={
          <>
            Loading ...
            <CircularProgress />
          </>
        }
        errorComponent={
          <Alert severity="error">This is an error alert — check it out!</Alert>
        }
      />
      {state.isCompleted && (
        <p>num todos : {state.data ? state.data.length : "..."}</p>
      )}
    </div>
  );
}

export default SampleLoadBased;
