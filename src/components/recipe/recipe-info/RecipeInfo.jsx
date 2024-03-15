import PropTypes from "prop-types";
import Cooking from "./current-cooking/Cooking";
import WantCook from "./want-to-cook/WantCook";

function RecipeInfo({ selectRecipe, readyCooking, cookingNow }) {
  return (
    <div className="py-6 border border-[#28282833] rounded-2xl bg-white flex flex-col space-y-4 h-fit">
      {/* want cook */}
      <WantCook
        selectRecipe={selectRecipe}
        readyCooking={readyCooking}
      ></WantCook>

      {/* currently cooking table */}
      <Cooking cookingNow={cookingNow}></Cooking>
    </div>
  );
}
RecipeInfo.propTypes = {
  selectRecipe: PropTypes.array,
  readyCooking: PropTypes.func,
  cookingNow: PropTypes.array,
};
export default RecipeInfo;
