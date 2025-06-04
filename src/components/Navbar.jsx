import React, { useState, useEffect } from "react";
import MedBut from "./MB/MedBut";
import Li from "./List/Li";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Add a useEffect to prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        className="sm:hidden fixed top-4 left-4 z-50  rounded p-2 text-zinc-500 "
        onClick={toggleNavbar}
      >
        Menu
      </button>

      <div
        className={`fixed left-0 top-0 z-50 w-full sm:w-36 h-full flex  text-zinc-600 bg-transparent list-none justify-start sm:justify-evenly flex-col ${
          isOpen ? "block " : "hidden"
        } sm:flex`}
      >
        <button
          className="sm:hidden absolute top-4 right-4 z-50 rounded p-2 bg-amber-300 "
          onClick={toggleNavbar}
        >
          X
        </button>
        <div className="h-full text-center mt-16 sm:mt-0">
          <Li content="Profile" link="#Profile" />
          <Li content="Projects" link="#Projects" />
          <Li content="About" link="#about" />
          <Li content="Contact" link="#contact" />
        </div>
        <div className="flex justify-center items-center  sm:mt-0">
          <MedBut />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
