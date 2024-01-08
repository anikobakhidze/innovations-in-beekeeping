import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./config/routes";
function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} Component={route.Component} key={route.path} />
      ))}
    </Routes>
  );
}

export default AppRoutes;
