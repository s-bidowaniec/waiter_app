import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
    <div>
      Awaiting server response <Spinner animation="grow"></Spinner>
    </div>
  );
};

export default LoadingSpinner;
