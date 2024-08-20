import { Alert, CircularProgress } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { fetchDataEngine } from "../logic/fetch-data-engine";
import UiFetchDataGen from "./gen-ui/fetch-data-gen";
import { fetchReducer, initialState } from "../hooks/fetch-reducer";
import { Todo } from "../types/types";

function SampleLoadBased() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos(): Promise<void> {
    const url = "https://jsonplaceholder.typicode.com/todos",
      params = null,
      validate = null;
    const responseData = await fetchDataEngine<Todo[], null>(
      url,
      params,
      validate,
      dispatch
    );
    setTodos(responseData);
  }

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
        <p>num todos : {todos ? todos.length : "..."}</p>
      )}
    </div>
  );
}

export default SampleLoadBased;
