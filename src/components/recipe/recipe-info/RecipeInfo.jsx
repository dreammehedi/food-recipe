import PropTypes from "prop-types";
import RacipeTable from "./RacipeTable";
import RecipeInfoTitle from "./RecipeInfoTitle";

function RecipeInfo({ selectRecipe }) {
  return (
    <div className="col-span-5 py-6 border border-[#28282833] rounded-2xl bg-white flex flex-col space-y-4 h-fit">
      {/* want to cook title */}
      <RecipeInfoTitle
        name={"Want to cook: "}
        length={selectRecipe.length}
      ></RecipeInfoTitle>
      {/* want to cook table */}
      <div>
        <RacipeTable selectRecipe={selectRecipe}></RacipeTable>
      </div>
      {/*  currently cooking title */}
      {/* <RecipeInfoTitle
        name={"Currently cooking: "}
        length={2}
      ></RecipeInfoTitle> */}
      {/* currently cooking table */}
      {/* <div>
        <RacipeTable
          name={"Chicken Caesar Salad"}
          price={"20 minutes"}
          calories={"400 calories"}
          col={3}
        ></RacipeTable>
      </div> */}
    </div>
  );
}
RecipeInfo.propTypes = {
  selectRecipe: PropTypes.array,
};
export default RecipeInfo;
