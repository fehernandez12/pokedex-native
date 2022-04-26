import React, { useState, createContext } from "react";
import { UserDetails } from "../utils/userDB";

interface Context {
  user: UserDetails | undefined;
  login: (userData: any) => void;
  logout: () => void;
}

export const AuthContext = createContext<Context>({
  user: undefined,
  login: (data: any) => {},
  logout: () => {},
});

function AuthProvider(props: any) {
  const { children } = props;
  const [user, setUser] = useState(undefined);

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(undefined);
  };

  const valueContext = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
