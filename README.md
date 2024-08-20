<h2>Motivation</h2>
fetching data from the server on button click or page load is a common task which involve :
<ul>
<li>perform http request to the server using fetch \ axios to get the response data</li>
<li>showing spinner</li>
<li>showing error</li>
<li>showing success</li>
</ul>

<p>This can happen in few pages and few applications so a generic solution can help and this is what this repository is all about</p>

<h2>Design</h2>
The design is composed of logic and ui via few layers

<h3>UI</h3>
<h4>FetchDataGen</h4>
This is a compontent that display error , spinner , success. its props are

```ts
  state : FetchState;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
```

You can use this generic component to create more specific component as done with FetchDataDefault

<h3>Logic</h3>
<h4>fetchDataEngine</h4>
<p>This function fetch the data from the server and fill the FetchState</p>
<p>You need to call this function either on button click handler or page load via useEffect</p>

```ts

async function fetchDataEngine<ResponseDataType, QueryParamsType = null>(
  url: string,
  params: QueryParamsType | null,
  validate: ((data: ResponseDataType) => IValidationResult) | null,
  dispatch: Dispatch<Action>
): Promise<ResponseDataType | null> 

```


<h4>fetchReducer + useReducer</h4>
The state FetchState has three properties :  error , isLoading and isCompleted so instead of using three properties and three set function i prefer to use reducer with one state. 

<h4>Interfaces</h4>

```ts

 export interface FetchState {
  error: MainErrors | null; // --- not error and completed means success
  isLoading: boolean;
  isCompleted: boolean;
}

export interface IFetchDataGenProps {
  state: FetchState;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}


```

<h2>Usage</h2>

```ts

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
          const responseData = await fetchDataEngine<Todo[]>(
            url,params,validate,dispatch
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


```
