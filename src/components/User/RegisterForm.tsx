import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserFormInput from "./UserFormInput";
import SubmitButton from "../Button/SubmitButton";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { registerUser } from "../../features/auth/authThunks";

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: any) => state.auth);
  const navigate = useNavigate()

  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setIsError("Passwords do not match.");
      return;
    }
    dispatch(registerUser({ email, password }));
    navigate("/")
  };

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
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </Link>
        <form onSubmit={handleSubmit}>
          <h4 className="text-center text-3xl font-bold capitalize mb-5">
            Register
          </h4>
          {/* <UserFormInput
            label="username"
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          /> */}
          <UserFormInput
            label="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <UserFormInput
            label="password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <UserFormInput
            label="confirm password"
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {isError && <p className="text-red-500 text-center">{isError}</p>}
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="w-full flex flex-col mt-5 justify-center items-center">
              <SubmitButton
                text={loading ? "Signing up..." : "Sign Up"}
                type="submit"
              />
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
