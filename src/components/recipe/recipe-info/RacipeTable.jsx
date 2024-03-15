import PropTypes from "prop-types";
import Button from "../../button/Button";
function RacipeTable({ length, name, price, calories }) {
  return (
    <table className="w-full font-fira-sans text-left">
      <thead>
        <tr
          className={`*:text-dark-06 p-4 *:font-medium grid grid-cols-4 justify-between`}
        >
          <th className="ml-6">Name</th>
          <th>Price</th>
          <th>Calories</th>
          <th></th>
        </tr>
      </thead>
      <tbody className="bg-[#28282808]">
        <tr className={`grid grid-cols-4 justify-between *:text-dark-70  p-4`}>
          <td className="flex gap-4">
            <span>{length}</span>
            {name}
          </td>
          <td>{price}</td>
          <td>{calories}</td>
          <td>
            <Button
              cls={
                "!text-base !text-dark bg-primary py-2 px-5 ring-1 ring-primary hover:ring-primary hover:bg-transparent"
              }
              name={"Preparing"}
            ></Button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

RacipeTable.propTypes = {
  length: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  calories: PropTypes.string,
};
export default RacipeTable;
{
  /* <tfoot>
  <tr className="text-dark-80 font-Lexend font-medium mt-4 grid grid-cols-3 justify-between">
    <td></td>
    <td>Total Time = 45 minutes</td>
    <td>Total Calories = 1050 calories</td>
  </tr>
</tfoot>; */
}
