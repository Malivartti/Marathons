import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import AuthContext from "./context/index";
import { getItem } from "./utils/storage";

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  useEffect(() => {
    if (getItem("auth") === "true") {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
