import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { navLinks } from "../data/data";
import Links from "./Links";
type NavLinksProps = {
  setMenu?: Dispatch<SetStateAction<boolean>>;
  menu?: boolean;
};

function NavLinks({ menu, setMenu }: NavLinksProps) {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [scrollTarget, setScrollTarget] = useState<null | string>(null);
  const [activeLink, setActiveLink] = useState<string>("hero");

  useEffect(() => {
    if (scrollTarget) {
      const section = document.getElementById(scrollTarget);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setScrollTarget(null);
    }
  }, [scrollTarget]);

  const handleClick = (id: string): void => {
    setScrollTarget(id);
    setActiveLink(id);
    setMenu?.(!menu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul
      className={`${isMobile ? "flex flex-col items-center gap-14 text-lg font-semibold md:pb-4 lg:hidden" : "hidden items-center gap-14 rounded-full bg-slate-900 px-8 py-2 text-lg font-medium dark:bg-light dark:font-semibold  lg:flex"}`}
    >
      {navLinks.map((link, index) => (
        <li
          onClick={() => handleClick(link.hash)}
          key={index}
          className={` cursor-pointer text-light dark:text-darkFont ${
            activeLink === link.hash
              ? " text-lightBlue dark:text-darkRed"
              : null
          } `}
        >
          {link.link}
        </li>
      ))}

      {isMobile ? <Links /> : null}
    </ul>
  );
}

export default NavLinks;
