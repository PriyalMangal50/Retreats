import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../store/auth';

export default function AdminRoute() {
<<<<<<< HEAD
  const { user, token } = useAuth();
  const isAuthenticated = Boolean(user && token);
=======
  const { isAuthenticated, user } = useAuth();
>>>>>>> 454d4ad61c136db059f89f9d14ecc67fa4f4fe0b
  const isAdmin = user?.userType === 'Admin';
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}