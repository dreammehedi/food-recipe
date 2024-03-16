import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
const socialContent = [
  {
    id: 1,
    link: "https://www.facebook.com/profile.php?id=61554869056271",
    name: <FaFacebook></FaFacebook>,
  },
  {
    id: 1,
    link: "https://github.com/dreammehedi",
    name: <FaGithub></FaGithub>,
  },
  {
    id: 1,
    link: "https://www.instagram.com/",
    name: <FaInstagram></FaInstagram>,
  },
];
function Social() {
  return (
    <ul className="flex justify-center items-center gap-4">
      {socialContent.map((social, ind) => {
        const { link, name } = social;
        return (
          <li
            className="transition-colors duration-300 ease-linear hover:bg-primary/50 p-3 bg-primary rounded-full cursor-pointer"
            key={ind}
          >
            <a className="text-dark text-xl" href={link} target="_blank">
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Social;
