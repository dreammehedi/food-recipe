import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Recipe from "./components/recipe/Recipe";
import ClickToTop from "./components/top/ClickToTop";

function App() {
  return (
    <>
      {/* <Preloader></Preloader> */}
      <Header></Header>
      <Banner></Banner>
      <Recipe></Recipe>
      <Footer></Footer>
      <ClickToTop></ClickToTop>
    </>
  );
}
export default App;
