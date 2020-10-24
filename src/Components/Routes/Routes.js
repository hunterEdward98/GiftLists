import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import ListView from "../ListView/ListView";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { connect } from "react-redux";

//put all of your unprotected routes here
const routes = [];

//put all of your protected routes here
const protectedRoutes = [
  { name: "/Home", component: Home },
  { name: "/My Lists", component: ListView },
  { name: "/ListView", component: ListView },
];
const Routes = () => {
  return (
    <div>
      {routes.map((x) => (
        <Route path={x.name} component={x.component} />
      ))}
      {protectedRoutes.map((x) => (
        <ProtectedRoute
          path={x.name || `/${x.component}`}
          component={x.component}
        />
      ))}
    </div>
  );
};

export default connect()(Routes);
