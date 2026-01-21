import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";


function Nav({isOpen}) {
  return (
    <div className={isOpen?"md:max-w-1/3 absolute min-w-51 -left-40 top-15 rounded max-w-[80%] h-51 p-4 text-lg border":"hidden"}>
      {/* Navigation menu items can be added here */}
      <ul className="flex flex-col gap-4">
        <li className="flex items-center gap-2">
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <FaPlay /> <p>Play</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <FaMedal /> <p>Hall Of Fame</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <FaFilter />
            <p>Filter</p>
          </a>
        </li>
        <li className="flex items-center gap-2">
          <a href="#" className="text-white hover:text-gray-300 flex items-center gap-2">
            <GoCommentDiscussion />
            <p>Discussion</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
