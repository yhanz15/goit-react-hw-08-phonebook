import { useAuth } from 'hook';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const location = useLocation();
  const { isLoggedIn, isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <Navigate to={redirectTo} state={{ from: location }} />
  ) : (
    Component
  );
};

// export const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();

//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   if (shouldRedirect) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };
