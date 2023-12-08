import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-4xl">Page does not exist...</h1>
        <Link to="/"> Back Home</Link>
      </div>
    </div>
  );
};

export default Error;
