import { Alert, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { fetchDataEngine } from "../utils/fetch-data-engine";
import useFetchState from "../hooks/use-fetch-state";
import { Todo } from "../types/types";
import UiFetchDataGen from "./gen-ui/fetch-data-gen";

function SampleLoadBased() {
  const {
    data: todos,
    error,
    isLoading,
    setData: setTodos,
    setError,
    setIsLoading,
  } = useFetchState<Todo[]>();

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos",
      params = null,
      validate = null;
    fetchDataEngine(url, params, validate, setTodos, setError, setIsLoading);
  }, []);

  return (
    <div>
      <UiFetchDataGen
        data={todos}
        error={error}
        isLoading={isLoading}
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
      {todos && <p>num todos : {todos ? todos.length : "..."}</p>}
    </div>
  );
}

export default SampleLoadBased;
