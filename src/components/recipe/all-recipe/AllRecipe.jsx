import SingleRecipe from "./SingleRecipe";

function AllRecipe() {
  return (
    <div className="col-span-7 grid grid-cols-2 justify-between gap-6">
      <SingleRecipe></SingleRecipe>
      <SingleRecipe></SingleRecipe>
    </div>
  );
}

export default AllRecipe;
