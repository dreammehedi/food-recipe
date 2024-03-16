import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

function Header() {
  const [menu, setMenu] = useState(false);
  const [scicky, setSticky] = useState(false);

  // active menu
  const activeMenu = () => {
    setMenu(!menu);
    console.log(!menu);
  };

  // scicky menu
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  });

  return (
    <header
      className={`${
        scicky
          ? "fixed bg-white shadow-lg shadow-primary/50 top-0 left-0 !py-6 md:!py-8"
          : "static "
      } bg-white w-full py-8 md:py-10 lg:py-12 transition-all duration-300 ease-linear`}
    >
      {/* navbar */}
      <nav className="container flex justify-between items-center  ">
        {/* logo */}
        <Logo></Logo>

        {/* desktop menu */}
        <Menu cls={"hidden lg:flex justify-center items-center gap-8"}></Menu>

        {/* mobile menu */}
        <Menu
          cls={`${
            menu ? "left-0" : "-left-full"
          } flex flex-col lg:hidden w-1/2 bg-white fixed top-0 p-10 h-screen shadow-lg rounded-tr-xl transition-all duration-300 ease-linear rounded-br-xl z-[999999] shadow-primary gap-8`}
        ></Menu>
        {/* search bar */}
        <div className="flex justify-between items-center gap-4">
          {/* search form */}
          <form className="hidden md:flex relative">
            <input
              className=" bg-dark-5 py-3 px-12 rounded-full text-dark-70 outline-none transition-all duration-300 ease-linear hover:ring-1 focus:ring-1 ring-primary"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 left-5 text-dark-70 text-[18px]"></FaSearch>
          </form>

          {/* registration user icon */}
          <div className="hidden md:flex bg-primary p-3 rounded-full justify-center items-center text-center transition-all duration-300 ease-linear hover:bg-primary/50 cursor-pointer">
            <FaRegUserCircle className="text-dark text-2xl  "></FaRegUserCircle>
          </div>

          {/* humberger menu */}
          <div
            onClick={() => {
              activeMenu();
            }}
            className={`${
              menu ? "bg-primary/50" : "bg-primary"
            } lg:hidden  p-3 rounded-full flex justify-center items-center text-center transition-all duration-300 ease-linear hover:bg-primary/50 cursor-pointer`}
          >
            {menu ? (
              <IoMdClose
                title="close"
                className={`${menu ? "text-white" : "text-dark"} text-2xl`}
              ></IoMdClose>
            ) : (
              <LuMenu title="open" className="text-dark text-2xl"></LuMenu>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
