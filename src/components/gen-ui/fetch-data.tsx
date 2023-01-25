import { useEffect } from "react";
import IValidationResult from "../../types/i-validation-results";
import useFetchData from "../../hooks/use-fetch-data";

interface IProps<DataType> {
  url: string;
  validate: ((data: DataType) => IValidationResult) | null;
  setData: (data: DataType) => void;
}

function FetchData<DataType>(props: IProps<DataType>) {
  const [data, isLoading, error] = useFetchData<DataType>(
    props.url,
    props.validate
  );
  useEffect(() => {
    if (data) {
      props.setData(data);
    }
  }, [data]);

  if (isLoading) {
    <div className="App">loading ...</div>;
  }

  if (error) {
    <div className="App">Error</div>;
  }

  return <p>Success !!!!! </p>;
}

export default FetchData;
