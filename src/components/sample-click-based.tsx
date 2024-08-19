import { fetchDataEngine } from "../utils/fetch-data-engine";
import useFetchState from "../hooks/use-fetch-state";
import { Todo } from "../types/types";
import FetchDataDefault from "./gen-ui/fetch-data-default";

function SampleClickBased() {
  const {
    data: todos,
    error,
    isLoading,
    setData: setTodos,
    setError,
    setIsLoading,
  } = useFetchState<Todo[]>();

  return (
    <div>
      <button
        onClick={() => {
          const url = "https://jsonplaceholder.typicode.com/todos",
            params = null,
            validate = null;
          fetchDataEngine(
            url,
            params,
            validate,
            setTodos,
            setError,
            setIsLoading
          );
        }}
      >
        Get jsonplaceholder todo num
      </button>
      {<FetchDataDefault data={todos} error={error} isLoading={isLoading} />}

      {todos && <p>num todos : {todos ? todos.length : "..."}</p>}
    </div>
  );
}

export default SampleClickBased;
