import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  About,
  PageLayout,
  SignUp,
  Login,
  Recipes,
  Error,
  SingleRecipe,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/recipes", element: <Recipes /> },
      { path: "/recipes/:id", element: <SingleRecipe /> },
      { path: "/error", element: <Error /> },
    ],
  },
  { path: "/register", element: <SignUp /> },
  { path: "/login", element: <Login /> },
]);
