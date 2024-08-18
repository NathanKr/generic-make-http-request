import { Alert, CircularProgress } from "@mui/material";
import { useState } from "react";
import GenericFetchData from "./generic-fetch-data";

function SampleWithQueryString() {
  const [urlComments, setUrlComments] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  console.log('SampleWithQueryString rendered');


  return (
    <div>
      <button
        onClick={() =>
          setUrlComments("https://jsonplaceholder.typicode.com/comments")
        }
      >
        Get jsonplaceholder num comments with postId=1
      </button>
      {
        <GenericFetchData<any[], { postId: number }>
          setData={(_comments: any[]) => setComments(_comments)}
          url={urlComments}
          params={{ postId: 1 }}
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

      <p>num comments with postId=1 : {comments ? comments.length : "..."}</p>
    </div>
  );
}

export default SampleWithQueryString;
