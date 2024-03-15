import RecipeInfoTitle from "../RecipeInfoTitle";
import CookingTable from "./CookingTable";

function Cooking() {
  return (
    <>
      {/* current cooking title */}
      <RecipeInfoTitle
        name={"Currently cooking: "}
        length={0}
      ></RecipeInfoTitle>

      {/* cooking table */}
      <CookingTable></CookingTable>
    </>
  );
}

export default Cooking;
