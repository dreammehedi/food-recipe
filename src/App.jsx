import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Preloader from "./components/preloader/Preloader";
import Recipe from "./components/recipe/Recipe";
import ClickToTop from "./components/top/ClickToTop";

function App() {
  return (
    <>
      <Preloader></Preloader>
      <Header></Header>
      <Banner></Banner>
      <Recipe></Recipe>
      <ClickToTop></ClickToTop>
    </>
  );
}
export default App;
