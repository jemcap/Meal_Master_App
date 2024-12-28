import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error: React.FC = () => {
  const { error } = useRouteError();
  console.log(error);
  return <div>Error</div>;
};

export default Error;
