import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserFormInput from "./UserFormInput";

const RegisterForm: React.FC = () => {
  return (
    <section className="grid place-items-center h-screen">
      <div className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 rounded-xl">
        <Link to="/" className="btn btn-sm btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </Link>
        <form>
          <h4 className="text-center text-3xl font-bold capitalize mb-5">
            Register
          </h4>
          <UserFormInput label="username" type="text" name="username" />
          <UserFormInput label="email" type="email" name="email" />
          <UserFormInput label="password" type="password" name="password" />
          <UserFormInput
            label="confirm password"
            type="password"
            name="comfirm-password"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-full flex flex-col mt-5 justify-center items-center">
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <p className="text-center mt-5">
              Already a member?
              <Link
                to="/login"
                className="ml-2 link link-hover link-primary capitalize text-blue-500"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
