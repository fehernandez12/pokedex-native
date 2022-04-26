import React, { createContext, useState } from "react";

interface Context {
  newFaves: number;
}

export const AppContext = createContext<Context>({
  newFaves: 0,
});

function AppProvider(props: any) {
  const { children } = props;
  const [newFaves, setNewFaves] = useState(0);
  const valueContext = {
    newFaves,
    setNewFaves,
  };
  return (
    <AppContext.Provider value={valueContext}>{children}</AppContext.Provider>
  );
}
