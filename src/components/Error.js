import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h3>This is Error Page..</h3>
      <h3>Which means the about URL Does not Found..</h3>
      <h3>
        {err.status} : {err.statusText} : {err.data}
      </h3>
    </div>
  );
};

export default Error;
