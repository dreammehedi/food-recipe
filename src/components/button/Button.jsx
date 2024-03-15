import PropTypes from "prop-types";
function Button({ name, cls }) {
  return (
    <button
      className={`${cls} transition-all duration-500 ease-linear text-[18px] md:text-xl capitalize py-5 px-8 font-semibold rounded-full`}
    >
      {name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
  cls: PropTypes.string,
};

export default Button;
