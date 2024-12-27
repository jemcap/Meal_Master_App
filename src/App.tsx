import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Layout from "./components/Layout";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Menu from "./routes/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Route>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
