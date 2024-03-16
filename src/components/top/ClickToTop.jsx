import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ClickToTop() {
  const [isShow, setIsShow] = useState("hidden");

  useEffect(() => {
    const scrollTop = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 450) {
        setIsShow("block");
      } else {
        setIsShow("hidden");
      }
    };

    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);

  // scrollTop function
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={() => {
        scrollTop();
      }}
      className={`${isShow} fixed bottom-8 right-8  z-[88888] bg-white shadow shadow-primary cursor-pointer p-3 rounded-full`}
    >
      <IoIosArrowUp className=" text-primary text-2xl "></IoIosArrowUp>
    </div>
  );
}

export default ClickToTop;
