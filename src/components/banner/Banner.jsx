import banner from "../../assets/bg/banner.png";
import Button from "../button/Button";
function Banner() {
  return (
    <section className="!mt-0 my-6 md:my-8 lg:my-10">
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="container bg-no-repeat bg-bottom bg-cover rounded-3xl overflow-hidden flex justify-center items-center h-[600px]"
      >
        <div className="w-full md:max-w-4xl space-y-6 md:space-y-8 lg:space-y-10 flex flex-col justify-center items-center text-center">
          <h1 className="text-white font-bold leading-normal md:!leading-[76px] text-3xl md:text-4xl lg:text-5xl">
            Savor the Flavors: A Journey Through Exquisite Recipes
          </h1>
          <p className="text-white">
            From the sun-kissed shores of Italy to the bustling markets of
            India, these recipes offer a passport to culinary bliss, inviting
            you to savor the flavors of the world. Whether you are a seasoned
            chef or an aspiring home cook, there is something for everyone to
            enjoy in this collection of exquisite recipes.
          </p>

          {/* button */}
          <div className="flex justify-center items-center gap-8">
            <Button
              cls={
                "bg-primary !py-3 !px-6 md:!py-4 md:!px-7 lg:!py-5 lg:!px-8 text-dark hover:bg-transparent ring-1 ring-primary hover:text-white hover:ring-white"
              }
              name={"Explore Now"}
            ></Button>
            <Button
              cls={
                "bg-transparent !py-3 !px-6 md:!py-4 md:!px-7 lg:!py-5 lg:!px-8 ring-1 ring-white text-white hover:bg-primary hover:ring-primary hover:text-dark"
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
