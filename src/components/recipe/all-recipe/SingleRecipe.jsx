import PropTypes from "prop-types";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
function SingleRecipe({ recipe, handleCook }) {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  return (
    <div className="p-6 border border-[#28282833] rounded-2xl bg-white flex flex-col space-y-4">
      {/* recipe img */}
      <figure>
        <img
          className="object-cover rounded-2xl w-auto h-[200px]"
          src={recipe_image}
          alt={recipe_name}
        />
      </figure>

      {/* title & description */}
      <div className="flex flex-col space-y-4">
        <h3 className="font-semibold text-xl text-dark2">{recipe_name}</h3>
        <p className="text-dark-06">{short_description}</p>
      </div>

      {/* Ingredients */}
      <div className="flex flex-col space-y-4 border-t border-b border-[#28282833] py-6">
        <h3 className="text-[18px] text-dark2 font-medium">
          Ingredients: {ingredients.length}
        </h3>
        <ul className="flex flex-col space-y-1 list-disc list-inside">
          {ingredients.map((ingredient, ind) => {
            return (
              <li key={ind} className="text-dark-06 font-fira-sans">
                {ingredient}
              </li>
            );
          })}
        </ul>
      </div>

      {/* time & calories */}
      <div className="font-fira-sans flex justify-start items-center space-x-4">
        <p className="text-dark-80 flex justify-start items-center gap-1">
          <IoTimeOutline></IoTimeOutline> {preparing_time}
        </p>
        <p className="text-dark-80 flex justify-start items-center gap-1">
          <FaFireFlameCurved></FaFireFlameCurved> {calories}
        </p>
      </div>

      {/* button */}
      <button
        onClick={() => {
          handleCook(recipe);
        }}
        className="transition-all duration-500 ease-linear  md:text-xl capitalize font-semibold rounded-full bg-primary text-dark text-[18px] px-6 py-3 flex mr-auto ring-1 ring-primary hover:bg-transparent "
      >
        Want to Cook
      </button>
    </div>
  );
}

SingleRecipe.propTypes = {
  recipe: PropTypes.object,
  handleCook: PropTypes.func,
};
export default SingleRecipe;
