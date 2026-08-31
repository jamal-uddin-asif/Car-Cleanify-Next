"use client";
import React, { Children, createContext, useState } from "react";

const UserContext = createContext(null);
const UserContextProvider = ({ Children }) => {

const [user, setUser] = useState(null)

  const value = {
    user, 
    setUser,
  };
  return <UserContext value={value}>{Children}</UserContext>;
};

export default UserContextProvider;
