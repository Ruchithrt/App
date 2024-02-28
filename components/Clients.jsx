"use client";
import { useState, createContext } from "react";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const logoutHandler = () => {
    alert("logged out");
  };

  return (
    <button className="btn" onClick={logoutHandler}>
      Logout
    </button>
  );
};
