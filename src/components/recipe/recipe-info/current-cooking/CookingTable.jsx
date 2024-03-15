import PropTypes from "prop-types";

function CookingTable({ cookingNow }) {
  // preparing time calculate
  const sumTime = cookingNow.reduce(
    (accum, curr) => accum + Number(curr.preparing_time.slice(0, 2)),
    0
  );

  // calories  calculate
  const sumCalories = cookingNow.reduce(
    (accum, curr) => accum + Number(curr.calories.slice(0, 3)),
    0
  );
  return (
    <table className="w-full font-fira-sans text-left">
      <thead>
        <tr
          className={`*:text-dark-06 p-4 *:font-medium grid grid-cols-4 justify-between`}
        >
          <th className="col-span-2 ml-6">Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
      </thead>
      <tbody className="bg-[#28282808]">
        {cookingNow.map((currentCooking, ind) => {
          const { recipe_name, preparing_time, calories } = currentCooking;
          return (
            <tr
              key={ind}
              className={`grid grid-cols-4 justify-between  *:text-dark-70  p-4`}
            >
              <td className="col-span-2 flex gap-4">
                <span>{ind + 1}</span>
                {recipe_name}
              </td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className="text-dark-80 font-Lexend font-medium mt-4 grid grid-cols-4 justify-between p-4">
          <td></td>
          <td></td>
          {/* {cookingNow.reduce((accum, curr) => accum + curr, 0)} */}
          <td className="mr-4">Total Time = {sumTime} minutes</td>
          <td>Total Calories = {sumCalories} calories</td>
        </tr>
      </tfoot>
    </table>
  );
}
CookingTable.propTypes = {
  cookingNow: PropTypes.array,
};
export default CookingTable;
