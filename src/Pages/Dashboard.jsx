import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Modal from "../Components/Modal";
import { Link } from "react-router-dom";

function Dashboard() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="h-auto mt-10 max-w-[90%] mx-auto">
      <div className="flex justify-between items-center">
        <p className="font-bold">
          Welcome{", "}
          {currentUser.displayName ? currentUser.displayName : "Guest"}
        </p>
        <Link
          to="/createquiz"
          className="mt-4 px-4 py-2 border border-white/20 text-white rounded hover:bg-white/10"
        >
          Create New Quiz
        </Link>
      </div>

      <div className="min-h-screen rounded mt-10">
        <table className="border-0 w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b-white/20 text-xs md:text-lg">
              <th>No.</th>
              <th>Type</th>
              <th>Title</th>
              <th className="hidden md:block">No. of Questions</th>
              <th>Visiblity</th>
              <th>Creation Date</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
