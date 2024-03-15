import SectionTitle from "../section/SectionTitle";
import AllRecipe from "./all-recipe/AllRecipe";
import RecipeInfo from "./recipe-info/RecipeInfo";

function Recipe() {
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
      <div className="container my-8 grid grid-cols-12 justify-between gap-6">
        <AllRecipe></AllRecipe>
        <RecipeInfo></RecipeInfo>
      </div>
    </section>
  );
}

export default Recipe;
