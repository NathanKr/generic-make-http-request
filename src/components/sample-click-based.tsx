import { useReducer } from "react";
import { fetchDataEngine } from "../utils/fetch-data-engine";
import FetchDataDefault from "./gen-ui/fetch-data-default";
import { fetchReducer } from "../hooks/fetch-reducer";
import { FetchState } from "../types/fetch-types";
import { Todo } from "../types/types";

const initialState: FetchState<Todo[]> = {
  data: null,
  error: null,
  isLoading: false,
  isCompleted: false,
};

function SampleClickBased() {
  const [state, dispatch] = useReducer(fetchReducer<Todo[]>, initialState);

  return (
    <div>
      <button
        onClick={() => {
          const url = "https://jsonplaceholder.typicode.com/todos",
            params = null,
            validate = null;
          fetchDataEngine(url, params, validate, dispatch);
        }}
      >
        Get jsonplaceholder todo num
      </button>
      {<FetchDataDefault state={state} />}

      {state.isCompleted && (
        <p>num todos : {state.data ? state.data.length : "..."}</p>
      )}
    </div>
  );
}

export default SampleClickBased;
