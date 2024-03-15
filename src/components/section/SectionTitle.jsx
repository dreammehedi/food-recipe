import PropTypes from "prop-types";
function SectionTitle({ title, desc }) {
  return (
    <div className="container w-full md:max-w-3xl flex flex-col justify-center items-center text-center space-y-3">
      <h2 className="text-dark text-4xl">{title}</h2>
      <p className="text-dark-60">{desc}</p>
    </div>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default SectionTitle;
