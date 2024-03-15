import Logo from "./Logo";

function Header() {
  return (
    <header>
      {/* navbar */}
      <nav className="container flex justify-between items-center py-10 ">
        {/* logo */}
        <Logo></Logo>
      </nav>
    </header>
  );
}

export default Header;
