import { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe";

function AllRecipe() {
  const [recipe, setRecipe] = useState([]);

  // get recipes data
  useEffect(() => {
    const getData = () => {
      fetch("recipes.json")
        .then((res) => res.json())
        .then((data) => setRecipe(data.recipes))
        .catch((error) => console.error(error));
    };
    getData();
  }, []);

  return (
    <div className="col-span-7 grid grid-cols-2 justify-between gap-6">
      {/* recipe data container */}
      {recipe.map((recipe, ind) => {
        return <SingleRecipe key={ind} recipe={recipe}></SingleRecipe>;
      })}
    </div>
  );
}

export default AllRecipe;
