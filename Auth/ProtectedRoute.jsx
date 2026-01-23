import { Navigate } from "react-router-dom";
import { AuthContext } from "../Coontext/AuthContext";
import { useContext } from "react";

export default function ProtectedRoute({ children }) {
  const { currentUser, authLoading } = useContext(AuthContext);
  if (authLoading) {
    return <p>User Authenticating........</p>;
  }
  if (!currentUser) {
    return <Navigate to="/homepage" replace />;
  }
  return children;
}
