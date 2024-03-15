import PropTypes from "prop-types";
import RecipeInfoTitle from "../RecipeInfoTitle";
import RacipeTable from "./RacipeTable";
function WantCook({ selectRecipe, readyCooking }) {
  return (
    <>
      <RecipeInfoTitle
        name={"Want to cook: "}
        length={selectRecipe.length}
      ></RecipeInfoTitle>
      {/* want to cook table */}
      <div>
        <RacipeTable
          selectRecipe={selectRecipe}
          readyCooking={readyCooking}
        ></RacipeTable>
      </div>
    </>
  );
}

WantCook.propTypes = {
  selectRecipe: PropTypes.array,
  readyCooking: PropTypes.func,
};
export default WantCook;
{
  /* want to cook title */
}
