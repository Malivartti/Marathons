import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privatesRoutes, publicRoutes } from "../router/routes";
import AuthContext from "../context";

const AppRouter: React.FC = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privatesRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element({})} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element({})} />
      ))}
    </Routes>
  );
};

export default AppRouter;
