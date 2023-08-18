import { Navigate, Outlet } from "react-router-dom";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const isAuth = useSelector((state) => state?.user?.user);
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
