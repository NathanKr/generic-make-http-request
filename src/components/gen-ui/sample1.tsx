import { Alert, CircularProgress } from "@mui/material";
import { useState } from "react";
import GenericFetchData from "./generic-fetch-data";

function Sample1() {
  const [urlTodos, setUrlTodos] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  return (
    <div>
      <button
        onClick={() =>
          setUrlTodos("https://jsonplaceholder.typicode.com/todos")
        }
      >
        Get jsonplaceholder todo num
      </button>
      {
        <GenericFetchData
          setData={(_todos: any[]) => setTodos(_todos)}
          url={urlTodos}
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
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
          }
        />
      }

      <p>num todos : {todos ? todos.length : "..."}</p>
    </div>
  );
}

export default Sample1;
