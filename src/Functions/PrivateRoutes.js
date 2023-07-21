import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const [token, setToken] = useState(true);
  let auth = { token };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

// export { PrivateRoute };
export default PrivateRoute;
