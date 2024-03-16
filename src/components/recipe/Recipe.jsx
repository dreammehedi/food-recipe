import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../section/SectionTitle";
import AllRecipe from "./all-recipe/AllRecipe";
import RecipeInfo from "./recipe-info/RecipeInfo";

function Recipe() {
  // local storage cookRecipe data get
  const getSelectRecipeLocalStorage =
    JSON.parse(localStorage.getItem("selectRecipe")) || [];

  const getCookingNowLocalStorage =
    JSON.parse(localStorage.getItem("cookingNow")) || [];

  // set recipe code data in state
  const [cookRecipe, setCookRecipe] = useState(getSelectRecipeLocalStorage);

  // final cooking state and update cooking table
  const [cookingNow, setCookingNow] = useState(getCookingNowLocalStorage);

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
    // update cooking now
    setCookingNow([...cookingNow, checkCooking]);
    const updateRecipe = cookRecipe.filter(
      (selectedRecipe) => selectedRecipe.recipe_id !== checkCooking.recipe_id
    );
    setCookRecipe(updateRecipe);
  };

  // local storage data set
  useEffect(() => {
    // local storage cookRecipe data set
    localStorage.setItem("selectRecipe", JSON.stringify(cookRecipe));

    // local storage cookingNow data set
    localStorage.setItem("cookingNow", JSON.stringify(cookingNow));
  }, [cookRecipe, cookingNow]);

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
          cookingNow={cookingNow}
        ></RecipeInfo>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
}

export default Recipe;
