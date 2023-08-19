import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login.jsx";

const Paths = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Paths;
