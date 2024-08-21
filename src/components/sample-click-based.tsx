import { useReducer, useState } from "react";
import FetchDataDefault from "./gen-ui/fetch-data-default";
import { fetchReducer, initialState } from "../hooks/fetch-reducer";
import { HttpMethod, Todo } from "../types/types";
import { makeHttpRequest } from "../logic/make-http-request-engine";

function SampleClickBased() {
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const [todos, setTodos] = useState<Todo[] | null>(null);

  return (
    <div>
      <button
        onClick={async () => {
          const url = "https://jsonplaceholder.typicode.com/todos";
          const responseData = await makeHttpRequest<Todo[]>(
            HttpMethod.GET,
            url,
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
