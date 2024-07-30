import { useAuth } from 'hook';
import { Navigate, useLocation } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Navigate to={location.state?.from || redirectTo} />
  ) : (
    Component
  );
};
