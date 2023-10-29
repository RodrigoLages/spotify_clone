import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/context";

import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Support from "./pages/Support/Support";
import Home from "./pages/Home/Home.jsx";
import Playlist from "./pages/Playlist/Playlist.jsx";

const Paths = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/support" element={<Support />} />
        <Route path="/home" element={<Home />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Routes>
    </ContextProvider>
  );
};

export default Paths;
