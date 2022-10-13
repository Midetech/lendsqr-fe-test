import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const userInfo: any = window.sessionStorage.getItem("lendsqr_user");

  const user = JSON.parse(userInfo);

  return user?.isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
