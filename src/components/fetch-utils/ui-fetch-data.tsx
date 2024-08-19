import { ReactElement } from "react";
import { MainErrors } from "../../types/main-errors";

interface IProps<DataType> {
  data: DataType | null;
  error: MainErrors | null;
  isLoading: boolean;
  successComponent: ReactElement;
  errorComponent: ReactElement;
  loadingComponent: ReactElement;
}

// Declare UiFetchData as a generic component
const UiFetchData = <DataType,>({
  data,
  error,
  isLoading,
  successComponent,
  loadingComponent,
  errorComponent,
}: IProps<DataType>) => {
  if (isLoading) {
    return loadingComponent;
  }

  if (error) {
    return errorComponent;
  }

  if (!data) {
    // --- not ready
    return <></>;
  }

  return successComponent;
};

export default UiFetchData;
