import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";

type LinkProps = {
  socials: string;
};

function Links({ socials }: LinkProps) {
  return (
    <div className={` gap-4 ${socials}`}>
      <a href="https://github.com/jmmaglonzo" target="_blank">
        <FaGithub className="text-2xl" />
      </a>
      <a href="https://www.linkedin.com/in/jmmaglonzo/" target="_blank">
        <FaLinkedin className="text-2xl" />
      </a>
      <a
        href="https://www.frontendmentor.io/profile/jmmaglonzo"
        target="_blank"
      >
        <SiFrontendmentor className="text-2xl" />
      </a>
      <a href="https://twitter.com/iocrpyto" target="_blank">
        <FaXTwitter className="text-2xl" />
      </a>
    </div>
  );
}

export default Links;
