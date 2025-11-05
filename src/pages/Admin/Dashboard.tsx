import { useAuth } from "../../store/auth";

const Dashboard = () => {
  const { user, clearAuth } = useAuth();
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.emailAddress}</p>
      <button onClick={clearAuth}>Logout</button>
    </div>
  );
};

export default Dashboard;
