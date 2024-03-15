function CookingTable() {
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
        <tr className={`grid grid-cols-4 justify-between  *:text-dark-70  p-4`}>
          <td className="col-span-2 flex gap-4">
            <span>{1}</span>dmfkd
          </td>
          <td>fdfad</td>
          <td>sfsdf</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="text-dark-80 font-Lexend font-medium mt-4 grid grid-cols-4 justify-between p-4">
          <td></td>
          <td></td>
          <td className="mr-4">Total Time = 45 minutes</td>
          <td>Total Calories = 1050 calories</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default CookingTable;
