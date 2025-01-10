import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { RecipesProvider } from "./context/recipesContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <RecipesProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </RecipesProvider>
  );
}

export default App;
