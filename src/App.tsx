import { useState } from "react";
import SampleWithQueryString from "./components/gen-ui/sample-with-query-string";
import Sample1 from "./components/gen-ui/sample1";

function App() {
  const [num, setNum] = useState(0);
  return (
    <>
      <button onClick={() => setNum(num + 1)}>Incrment</button>
      <p>{num}</p>
      <Sample1 />
      <SampleWithQueryString />
    </>
  );
}

export default App;
