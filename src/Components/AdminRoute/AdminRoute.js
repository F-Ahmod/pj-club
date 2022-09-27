import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Firebase/useFirebase';


const AdminRoute = ({ children, ...rest }) => {
    const { user, admin} = useFirebase();
    const location = useLocation();
   
    if (user.email && admin==="admin") {
        return children;
    }
    return <Navigate to="/dashboard" state={{ from: location }} />;

};

export default AdminRoute;