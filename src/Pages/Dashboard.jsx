import React, { useContext } from "react";
import { AuthContext } from "../../Coontext/AuthContext";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return <div>welcome : {currentUser.displayName}</div>;
}

export default Dashboard;
