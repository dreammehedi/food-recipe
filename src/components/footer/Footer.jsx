import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

function Footer() {
  return (
    <footer className="bg-dark-5 flex flex-col gap-8 py-6 md:py-8 lg:py-12">
      <FooterTop></FooterTop>
      <FooterBottom></FooterBottom>
    </footer>
  );
}

export default Footer;
