import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  About,
  PageLayout,
  Error,
  Pantry,
  Planner,
  Login,
  SignUp,
  Protected,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/error", element: <Error /> },
      {
        path: "/pantry",
        element: <Pantry />,
      },
      {
        path: "/planner",
        element: <Planner />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <SignUp /> },
]);
