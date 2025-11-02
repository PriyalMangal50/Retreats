import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../store/auth';

export default function AdminRoute() {
  const { isAuthenticated, user } = useAuth();
  const isAdmin = user?.userType === 'Admin';
  if (!isAuthenticated) return <Navigate to="/admin/login" replace />;
  return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
}