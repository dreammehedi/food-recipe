import Logo from "../header/Logo";
import Menu from "../header/Menu";
function FooterTop() {
  return (
    <div className="container flex flex-col justify-center items-center text-center space-y-4">
      {/* logo */}
      <Logo></Logo>

      {/* menu */}
      <Menu cls={"flex justify-center items-center gap-8"}></Menu>

      {/* newsletter */}
      {/* search form */}
      <form className="flex relative">
        <input
          className="bg-dark-5 py-4 px-8 w-[350px] rounded-full text-dark-70 outline-none transition-all duration-300 ease-linear hover:ring-1 focus:ring-1 ring-primary"
          type="email"
          placeholder="Newsletter"
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-linear hover:bg-primary/50 hover:text-dark capitalize py-2 px-6 font-semibold rounded-full bg-transparent text-primary ring-1 ring-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FooterTop;
