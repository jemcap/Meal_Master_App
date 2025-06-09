import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

const ProtectedLayout = () => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  console.log(user)
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default ProtectedLayout;
