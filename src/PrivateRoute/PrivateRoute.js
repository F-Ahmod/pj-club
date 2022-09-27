import React from "react";
import { Route,Navigate } from "react-router-dom";
import useFirebase from "../Firebase/useFirebase";
const PrivateRoute = ({ children, ...rest }) => {
  // const {children, ...rest} = props;
  const { admin } = useFirebase();
 
  return (
    <Route
    {...rest}
    render={() => admin
      ? children
      : <Navigate to="/login" />
    }
  />

  );
};

export default PrivateRoute;
