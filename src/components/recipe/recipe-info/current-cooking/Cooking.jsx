import PropTypes from "prop-types";
import RecipeInfoTitle from "../RecipeInfoTitle";
import CookingTable from "./CookingTable";

function Cooking({ cookingNow }) {
  return (
    <>
      {/* current cooking title */}
      <RecipeInfoTitle
        name={"Currently cooking: "}
        length={cookingNow.length}
      ></RecipeInfoTitle>

      {/* cooking table */}
      <CookingTable cookingNow={cookingNow}></CookingTable>
    </>
  );
}
Cooking.propTypes = {
  cookingNow: PropTypes.array,
};
export default Cooking;
