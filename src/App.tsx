import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store/store";
import { fetchUserSession } from "./features/auth/authThunks";

import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserSession());
  }, [dispatch]);
  
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
