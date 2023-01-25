import { Alert, CircularProgress } from "@mui/material";
import { useState } from "react";
import GenericFetchData from "./components/gen-ui/generic-fetch-data";

function App() {
  const [url, setUrl] = useState("");
  const [todos, setTodos] = useState<any[]>([]);

  return (
    <div className="App">
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/todos")}
      >
        Get jsonplaceholder todo num
      </button>
      {url ? (
        <GenericFetchData
          setData={(_todos: any[]) => setTodos(_todos)}
          url={url}
          // --- todo nath change null to validation if required
          validate={null}
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
      ) : (
        ""
      )}

      <p>num todos : {todos ? todos.length : "..."}</p>
    </div>
  );
}

export default App;
