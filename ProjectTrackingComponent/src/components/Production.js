import { Navigate, Outlet } from "react-router-dom";
import HomePage from "./HomePage";

const ProtectedRoute = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
