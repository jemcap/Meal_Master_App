import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  PageLayout,
  SignUp,
  Login,
  Recipes,
  Error,
  SingleRecipe,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />} errorElement={<Error />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/:id" element={<SingleRecipe />} />
        </Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
