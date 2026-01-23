import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { Link } from "react-router-dom";
function Nav({ isOpen }) {
  return (
    <div
      className={
        isOpen
          ? "bg-[url('/bg.png')] bg-black/90 bg-blend-darken  md:max-w-1/3 absolute min-w-51  -left-40 top-15 rounded max-w-[80%] h-auto p-4 text-lg border-2 text-white/60 border-white/20 "
          : "hidden"
      }
    >
      {/* Navigation menu items can be added here */}
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <a href="#" className=" hover:text-white flex items-center gap-2">
            <FaPlay /> <p>Play</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className=" hover:text-white flex items-center gap-2">
            <FaMedal /> <p>Hall Of Fame</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className="hover:text-white flex items-center gap-2">
            <FaFilter />
            <p>Filter</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className="hover:text-white flex items-center gap-2">
            <GoCommentDiscussion />
            <p>Discussion</p>
          </a>
        </li>
      </ul>
      <div className="flex md:hidden justify-around mt-5 items-center">
        <a href="#" className="text-white text-sm hover:text-gray-300">
          Login
        </a>
        <Link
          to="/signup"
          className="text-white bg-white/10 text-sm px-4 py-2 rounded border-0.5 border-white/20 hover:bg-white/20"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Nav;
