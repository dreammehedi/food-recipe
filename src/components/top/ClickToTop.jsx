import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ClickToTop() {
  const [isShow, setIsShow] = useState("hidden");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      setIsShow("block");
    } else {
      setIsShow("hidden");
    }
  });

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
