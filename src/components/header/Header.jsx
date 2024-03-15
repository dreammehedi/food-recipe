import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import Menu from "./Menu";
function Header() {
  return (
    <header>
      {/* navbar */}
      <nav className="container flex justify-between items-center py-10 ">
        {/* logo */}
        <Logo></Logo>

        {/* menu */}
        <Menu></Menu>
        {/* search bar */}
        <div className="flex justify-between items-center gap-4">
          {/* search form */}
          <form className="relative">
            <input
              className="bg-dark-5 py-3 px-12 rounded-full text-dark-70 outline-none transition-all duration-300 ease-linear hover:ring-1 focus:ring-1 ring-primary"
              type="text"
              placeholder="Search"
            />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 left-5 text-dark-70 text-[18px]"></FaSearch>
          </form>
          <div className="bg-primary p-3 rounded-full flex justify-center items-center text-center transition-all duration-300 ease-linear hover:bg-primary/50 cursor-pointer">
            <FaRegUserCircle className="text-dark text-2xl  "></FaRegUserCircle>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
