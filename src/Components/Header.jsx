import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav from "./Nav";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex justify-between md:max-w-[70%]  max-w-[95%] m-auto items-center p-4">
      <div className="font-bold text-white text-4xl">Quiz</div>
      <div
        className="flex gap-10 text-xl justify-center
       items-center"
      >
        <div className="hidden md:flex gap-10 justify-center items-center">
          <a href="#" className="text-white hover:text-gray-300">
            Login
          </a>
          <a
            href="#"
            className="text-white bg-white/10 px-4 py-2 rounded border-0.5 border-white/20 hover:bg-white/20"
          >
            Register
          </a>
        </div>
        <div className="relative">
          <button
            className="hover:bg-white/10 px-3 rounded py-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <RxHamburgerMenu size={34} />
          </button>

          <Nav isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

export default Header;
