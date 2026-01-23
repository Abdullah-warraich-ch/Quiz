import { Navigate } from "react-router-dom";
import { AuthContext } from "../Coontext/AuthContext";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
  const { currentUser, authLoading } = useContext(AuthContext);
  if (authLoading) {
    return (
      <div className="h-screen">
        <p>User Authenticating........</p>;
      </div>
    );
  }
  if (!currentUser) {
    return <Navigate to="/homepage" replace />;
  }
  return children;
}
