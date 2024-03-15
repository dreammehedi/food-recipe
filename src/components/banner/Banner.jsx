import banner from "../../assets/bg/banner.png";
import Button from "../button/Button";
function Banner() {
  return (
    <section className="my-6 md:my-8 lg:my-10">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="container bg-no-repeat bg-left-bottom bg-cover rounded-3xl overflow-hidden flex justify-center items-center h-[600px]"
      >
        <div className="w-full md:max-w-4xl space-y-6 md:space-y-8 lg:space-y-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-white font-bold leading-normal md:!leading-[76px] text-3xl md:text-4xl lg:text-5xl">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-white">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>

          {/* button */}
          <div className="flex justify-center items-center gap-8">
            <Button
              cls={
                "bg-primary text-dark hover:bg-transparent ring-1 ring-primary hover:text-white hover:ring-white"
              }
              name={"Explore Now"}
            ></Button>
            <Button
              cls={
                "bg-transparent ring-1 ring-white text-white hover:bg-primary hover:ring-primary hover:text-dark"
              }
              name={"Our Feedback"}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
