import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../section/SectionTitle";
import AllRecipe from "./all-recipe/AllRecipe";
import RecipeInfo from "./recipe-info/RecipeInfo";

function Recipe() {
  // set recipe code data in state
  const [cookRecipe, setCookRecipe] = useState([]);

  // handleCook function
  const handleCook = (cookData) => {
    // check cookData is already exist or not
    const checkCookData = cookRecipe.find(
      (data) => data.recipe_id == cookData.recipe_id
    );

    // after cookData check data set
    if (!checkCookData) {
      setCookRecipe([...cookRecipe, cookData]);
      toast.success("Cook Added...");
    } else {
      toast.warn("Cook Already Added...");
    }
  };

  // ready cooking data
  const readyCooking = (checkCooking) => {
    const updateRecipe = cookRecipe.filter(
      (selectedRecipe) => selectedRecipe.recipe_id !== checkCooking.recipe_id
    );
    setCookRecipe(updateRecipe);
    console.log(updateRecipe);
  };

  return (
    <section className="my-6 md:my-8 lg:my-10">
      {/* section title */}
      <SectionTitle
        title={"Our Recipes"}
        desc={
          "At its core, a recipe description serves as a bridge between the chef and the cook, conveying not just what to do, but how to do it. It should paint a vivid picture of the dish, evoking anticipation and excitement."
        }
      ></SectionTitle>

      {/* recipe full container */}
      <div className="container my-8 grid grid-cols-1 lg:grid-cols-2 justify-between gap-6">
        <AllRecipe handleCook={handleCook}></AllRecipe>
        <RecipeInfo
          selectRecipe={cookRecipe}
          readyCooking={readyCooking}
        ></RecipeInfo>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
}

export default Recipe;
