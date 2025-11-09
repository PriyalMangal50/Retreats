import { useEffect } from "react";
import { useAuth } from "../../store/auth";

const Dashboard = () => {
  const { user, clearAuth } = useAuth();

  // useEffect(() => {
  //   function handler(e: Event) {
  //     const detail = (e as CustomEvent).detail;
  //     // update state / show toast
  //   }
  //   window.addEventListener("dashboard-notification", handler as EventListener);
  //   return () =>
  //     window.removeEventListener(
  //       "dashboard-notification",
  //       handler as EventListener
  //     );
  // }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.emailAddress}</p>
      <button onClick={clearAuth}>Logout</button>
    </div>
  );
};

export default Dashboard;
