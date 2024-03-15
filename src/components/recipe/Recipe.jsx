import SectionTitle from "../section/SectionTitle";

function Recipe() {
  return (
    <section className="my-6 md:my-8 lg:my-10">
      <SectionTitle
        title={"Our Recipes"}
        desc={
          "At its core, a recipe description serves as a bridge between the chef and the cook, conveying not just what to do, but how to do it. It should paint a vivid picture of the dish, evoking anticipation and excitement."
        }
      ></SectionTitle>
    </section>
  );
}

export default Recipe;
