import { FaFireFlameCurved } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import Button from "../../button/Button";
function SingleRecipe() {
  return (
    <div className="p-6 border border-[#28282833] rounded-2xl bg-white flex flex-col space-y-4">
      {/* recipe img */}
      <figure>
        <img
          className="object-cover rounded-2xl w-auto h-[200px]"
          src=""
          alt=""
        />
      </figure>

      {/* title & description */}
      <div className="flex flex-col space-y-4">
        <h3 className="font-semibold text-xl text-dark2">
          Spaghetti Bolognese
        </h3>
        <p className="text-dark-06">
          Classic Italian pasta dish with savory meat sauce.
        </p>
      </div>

      {/* Ingredients */}
      <div className="flex flex-col space-y-4 border-t border-b border-[#28282833] py-6">
        <h3 className="text-[18px] text-dark2 font-medium">Ingredients: 6</h3>
        <ul className="flex flex-col space-y-1 list-disc list-inside">
          <li className="text-dark-06 font-fira-sans">500g ground beef </li>
          <li className="text-dark-06 font-fira-sans">500g ground beef </li>
        </ul>
      </div>

      {/* time & calories */}
      <div className="font-fira-sans flex justify-start items-center space-x-4">
        <p className="text-dark-80 flex justify-start items-center gap-1">
          <IoTimeOutline></IoTimeOutline> 30 minutes
        </p>
        <p className="text-dark-80 flex justify-start items-center gap-1">
          <FaFireFlameCurved></FaFireFlameCurved> 30 minutes
        </p>
      </div>

      {/* button */}
      <Button
        cls={
          "bg-primary text-dark !text-[18px] !px-6 !py-3 flex mr-auto ring-1 ring-primary hover:bg-transparent "
        }
        name={"Want to Cook"}
      ></Button>
    </div>
  );
}

export default SingleRecipe;
