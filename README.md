<h2>Motivation</h2>
fetching data from the server on button click or page load is a common task which involve :
<ul>
<li>perform http request to the server using fetch \ axios</li>
<li>showing spinner</li>
<li>showing error</li>
<li>showing success</li>
<li>showing the data we got from the server</li>
</ul>

<p>This can happen in few pages and few applications so a generic solution can help and this is what this repository is all about</p>

<h2>Design</h2>
The design is composed of logic and ui via few layers

<h3>UI</h3>
<h4>FetchDataGen</h4>
This is a compontent that display error , spinner , success. its props are

```ts
  state : FetchState<DataType>;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
```

You can use this generic component to create more specific component as done with FetchDataDefault

<h3>Logic</h3>
<h4>fetchDataEngine</h4>
<p>This function fetch the data from the server and call setData, setError , setIsLoading accordingly</p>
<p>You need to call this function either on button click handler or page load via useEffect</p>

```ts

function fetchDataEngine<DataType, QueryParamsType>(
  url: string,
  params: QueryParamsType | null,
  validate: ((data: DataType) => IValidationResult) | null,
  dispatch: Dispatch<Action<DataType>>
) 

```


<h4>fetchReducer + useReducer</h4>
The state has four properties : data , error , isLoading and isCompleted so instead of
using four properties and four set function i prefer to use reducer with one state. 

<h4>Interfaces</h4>

```ts

 export interface FetchState<DataType> {
  data: DataType | null;
  error: MainErrors | null;
  isLoading: boolean;
  isCompleted: boolean;
}

export interface IFetchDataGenProps<DataType> {
  state: FetchState<DataType>;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}

```

<h2>Usage</h2>

```ts

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

```
