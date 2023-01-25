import { useState } from "react";
import FetchData from "./components/gen-ui/fetch-data";

function App() {
  // --- todo nath change null to validation if required
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
        <FetchData
          setData={(_todos: any[]) => setTodos(_todos)}
          url={url}
          validate={null}
        />
      ) : (
        ""
      )}
      <p>num todos : {todos ? todos.length : '...'}</p>
    </div>
  );
}

export default App;
