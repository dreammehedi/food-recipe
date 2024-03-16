import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div className="w-full h-screen  cursor-wait flex justify-center items-center fixed top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2 bg-white z-[999999999999]">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#0BE58A"
            ariaLabel="food recipe loading"
            visible={true}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Preloader;
