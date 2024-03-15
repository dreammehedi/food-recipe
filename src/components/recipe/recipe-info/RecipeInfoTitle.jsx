import PropTypes from "prop-types";
function RecipeInfoTitle({ name, length }) {
  return (
    <h1 className="font-semibold text-2xl  text-dark2 text-center w-4/5 mx-auto inline-block pb-4 border-b border-[#28282826]">
      {name}
      {length}
    </h1>
  );
}
RecipeInfoTitle.propTypes = {
  name: PropTypes.string,
  length: PropTypes.number,
};
export default RecipeInfoTitle;
