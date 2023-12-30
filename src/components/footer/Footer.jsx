import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-wrap flex-col items-center sm:flex-row py-1 px-4 text-xs gap-2 text-center justify-between">
      <p>CSS-GEN</p>
      <p>Made with <span className="text-purple-700">❤</span> by Tapesh Dua</p>
      <div className="mr-4 flex gap-2 text-sm ">
        <a href="https://github.com/Tapesh-1308/" target="_blank">
          <FaGithub className="hover:text-purple-500" />
        </a>
        <a href="https://www.linkedin.com/in/tapesh-dua-b49872216/" target="_blank">
          <FaLinkedin className="hover:text-purple-500" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
