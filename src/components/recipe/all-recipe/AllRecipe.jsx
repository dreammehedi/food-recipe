import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe";
function AllRecipe({ handleCook }) {
  // set recipes data in state
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
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-6">
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
AllRecipe.propTypes = {
  handleCook: PropTypes.func,
};
export default AllRecipe;
