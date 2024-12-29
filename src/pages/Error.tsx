import React from "react";
import { useRouteError, Link } from "react-router-dom";
import PrimaryButton from "../components/Button/PrimaryButton";

const Error: React.FC = () => {
  const error: unknown = useRouteError();
  console.log(error);
  if ((error as any).status === 404) {
    return (
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-2xl font-bold">Oops...</p>
          <h1 className="text-9xl font-semibold text-primary">404</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h2>
          <div className="mt-10 ">
            <Link to="/">
              <PrimaryButton text="Go back home" />
            </Link>
          </div>
        </div>
      </main>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};

export default Error;
