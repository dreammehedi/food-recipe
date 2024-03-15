import { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe";

function AllRecipe() {
  // set recipes data in state
  const [recipe, setRecipe] = useState([]);

  // set recipe code data in state
  const [cookRecipe, setCookRecipe] = useState([]);

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

  // handleCook function
  const handleCook = (cookData) => {
    // check cookData is already exist or not
    const checkCookData = cookRecipe.find(
      (data) => data.recipe_id == cookData.recipe_id
    );
    // after cookData check data set
    if (!checkCookData) {
      setCookRecipe([...cookRecipe, cookData]);
    } else {
      console.log("I am already added");
    }
  };

  return (
    <div className="col-span-7 grid grid-cols-2 justify-between gap-6">
      {/* recipe data container */}
      {recipe.map((recipe, ind) => {
        return (
          <SingleRecipe
            key={ind}
            handleCook={handleCook}
            recipe={recipe}
          ></SingleRecipe>
        );
      })}
    </div>
  );
}

export default AllRecipe;
