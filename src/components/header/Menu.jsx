const menuContent = [
  { id: 1, menu: "Home", link: "./index.html" },
  { id: 2, menu: "Recipes", link: "./recipe.html" },
  { id: 3, menu: "About", link: "./about.html" },
  { id: 4, menu: "Search", link: "./search.html" },
];

function Menu() {
  return (
    <ul className="flex justify-center items-center gap-8">
      {menuContent.map((singleMenu, ind) => {
        const { menu, link } = singleMenu;
        return (
          <li key={ind}>
            <a
              className="text-dark-70 font-medium transition-colors duration-300 ease-linear hover:text-primary"
              href={link}
            >
              {menu}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Menu;
