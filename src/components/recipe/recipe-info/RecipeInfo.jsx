import RacipeTable from "./RacipeTable";
import RecipeInfoTitle from "./RecipeInfoTitle";

function RecipeInfo() {
  return (
    <div className="col-span-5 py-6 border border-[#28282833] rounded-2xl bg-white flex flex-col space-y-4 h-fit">
      {/* want to cook title */}
      <RecipeInfoTitle name={"Want to cook: "} length={1}></RecipeInfoTitle>
      {/* want to cook table */}
      <div>
        <RacipeTable
          length={1}
          name={"Chicken Caesar Salad"}
          price={"20 minutes"}
          calories={"400 calories"}
        ></RacipeTable>
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

export default RecipeInfo;
