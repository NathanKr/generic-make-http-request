import { useReducer, useState } from "react";
import { fetchDataEngine } from "../logic/fetch-data-engine";
import FetchDataDefault from "./gen-ui/fetch-data-default";
import { fetchReducer, initialState } from "../hooks/fetch-reducer";
import { Todo } from "../types/types";


function SampleClickBased() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const [todos, setTodos] = useState<Todo[] | null>(null);

  return (
    <div>
      <button
        onClick={async () => {
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
        }}
      >
        Get jsonplaceholder todo num
      </button>
      {<FetchDataDefault state={state} />}

      {state.isCompleted && <p>num todos : {todos ? todos.length : "..."}</p>}
    </div>
  );
}

export default SampleClickBased;
