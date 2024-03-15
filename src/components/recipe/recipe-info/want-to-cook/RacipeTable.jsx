import PropTypes from "prop-types";
function RacipeTable({ selectRecipe, readyCooking }) {
  return (
    <table className="w-full font-fira-sans text-left">
      <thead>
        <tr
          className={`*:text-dark-06 p-4 *:font-medium grid grid-cols-8 justify-between`}
        >
          <th className="col-span-3 ml-6">Name</th>
          <th className="col-span-1">Time</th>
          <th className="col-span-4">Calories</th>
        </tr>
      </thead>
      <tbody className="bg-[#28282808]">
        {selectRecipe.map((recipe, ind) => {
          const { recipe_name, preparing_time, calories } = recipe;
          return (
            <tr
              key={ind}
              className={`grid grid-cols-8 justify-between gap-4 *:break-words *:text-dark-70  p-4`}
            >
              <td className="col-span-3 flex gap-4">
                <span>{ind + 1}</span>
                {recipe_name}
              </td>
              <td className="col-span-1">{preparing_time}</td>
              <td className="col-span-2">{calories}</td>
              <td className="col-span-2">
                <button
                  onClick={() => {
                    readyCooking(recipe);
                  }}
                  className="text-sm md:text-base transition-colors duration-300 ease-linear rounded-full font-Lexend font-medium text-dark bg-primary py-2 px-3 ring-1 ring-primary hover:ring-primary hover:bg-transparent"
                >
                  Preparing
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

RacipeTable.propTypes = {
  selectRecipe: PropTypes.array,
  readyCooking: PropTypes.func,
};
export default RacipeTable;