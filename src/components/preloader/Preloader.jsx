import { useEffect, useState } from "react";
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
        <div
          className={`${
            loading ? "block" : "hidden"
          } w-full h-screen flex justify-center items-center fixed top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2 bg-white z-[999999999999]`}
        >
          <div className="flex justify-center items-center h-screen">
            <div className="rounded-full h-20 w-20 bg-primary animate-ping"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Preloader;
