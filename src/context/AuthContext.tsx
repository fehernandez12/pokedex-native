import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  user: undefined,
});

function AuthProvider(props: any) {
  const { children } = props;
  const [user, setUser] = useState(undefined);

  const valueContext = {
    user,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider };
