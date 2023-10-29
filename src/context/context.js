import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const handleLogout = () => {
    setToken("");
    setUserId("");
    setUsername("");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        username,
        setUsername,
        userId,
        setUserId,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
