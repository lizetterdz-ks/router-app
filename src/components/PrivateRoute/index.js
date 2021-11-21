import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../features/auth/authSelectors";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children, redirectTo }) => {
  const isAuth = useSelector(selectIsAuthenticated);
  return (
    isAuth ? children : 
    <Navigate to={redirectTo} />)
};
