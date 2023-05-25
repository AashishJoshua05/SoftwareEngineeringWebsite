// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
