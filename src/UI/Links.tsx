import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { socials } from "../data/data";

function Links() {
  return (
    <div className="flex gap-4">
      {socials.map((item, index) => (
        <a
          href={item.links}
          key={index}
          target="_blank"
          className="text-xl duration-300 lg:hover:scale-150"
        >
          {item.iconNames === "FaGitHub" && <FaGithub />}
          {item.iconNames === "FaLinkedin" && <FaLinkedin />}
          {item.iconNames === "SiFrontendmentor" && <SiFrontendmentor />}
          {item.iconNames === "FaXTwitter" && <FaXTwitter />}
        </a>
      ))}
    </div>
  );
}

export default Links;
