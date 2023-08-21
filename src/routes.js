import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Support from "./pages/Support/Support";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};

export default Paths;
