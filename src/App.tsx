import { RouterProvider } from "react-router-dom";
import { router } from "./utils/router";
import { RecipesProvider } from "./context/recipesContext";

function App() {
  return (
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider>
  );
}

export default App;
