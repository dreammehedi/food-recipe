import { useState } from "react";
import { IoIosHeartHalf, IoMdHeart } from "react-icons/io";
import Social from "./socialmenu/Social";

function FooterBottom() {
  const date = new Date();
  const year = date.getFullYear();
  const [heart, setHeart] = useState(true);

  const activeHeart = () => {
    setHeart(!heart);
  };
  return (
    <div className="container flex flex-col justify-center items-center text-center lg:flex-row lg:justify-evenly gap-4 py-4">
      {/* copyright */}
      <p className="text-dark-70 flex justify-center flex-wrap text-wrap gap-1 items-center">
        &copy; Copyright {year} All Rights Reserved.
        <span
          className="inline"
          onClick={() => {
            activeHeart();
          }}
        >
          {heart ? (
            <IoIosHeartHalf
              title="full love"
              className="text-primary cursor-pointer"
            ></IoIosHeartHalf>
          ) : (
            <IoMdHeart
              title="half love"
              className="text-primary cursor-pointer"
            ></IoMdHeart>
          )}
        </span>
        by Mehedi Hassan Miraj.
      </p>

      {/* social menu */}
      <Social></Social>
    </div>
  );
}

export default FooterBottom;
