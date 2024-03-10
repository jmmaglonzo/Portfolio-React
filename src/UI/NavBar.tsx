import React, { useEffect, useRef, useState } from "react";
import profile from "src/assets/profile.png";
import { FaCode } from "react-icons/fa6";
import Links from "./Links";

function NavBar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
    window.innerWidth <= 768,
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleMenu = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setMenu((prevMenu) => !prevMenu);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenu(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <header className=" fixed left-0 top-0 z-50 w-full bg-light pt-4 dark:bg-backgroundColor">
      <nav
        className="container relative flex items-center justify-between"
        ref={menuRef}
      >
        <div className="flex items-center gap-4 font-bold">
          <FaCode size={32} className="text dark:text-white" />
          <p className=" text-lightBlue dark:text-darkRed md:text-2xl">
            Lon
            <span className="font-semibold text-darkFont dark:text-white">
              zo
            </span>
          </p>
        </div>

        <ul className="hidden items-center gap-14 rounded-full bg-slate-900 px-8 py-2 text-lg font-medium text-white dark:bg-light dark:font-semibold dark:text-darkFont lg:flex">
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <div className="flex items-center gap-2">
          <label
            htmlFor="check"
            className="relative h-4 w-8 cursor-pointer rounded-full bg-cards p-1 shadow-md duration-300 dark:bg-light  md:h-6 md:w-12"
          >
            <input
              type="checkbox"
              className="peer sr-only"
              id="check"
              onChange={handleThemeSwitch}
              checked={theme === "dark"}
            />
            <span
              className="absolute left-[2px] top-[1.5px] h-4/5 w-2/5 rounded-full bg-lightAccent duration-300 peer-checked:left-[17.5px] peer-checked:bg-forms
            md:left-[3px] md:top-[2.5px]
            md:peer-checked:left-[26px]
            "
            ></span>
          </label>
          <button
            className="flex  cursor-pointer items-center gap-4 rounded-full bg-cards p-1 pr-4 dark:bg-lightAccent"
            onClick={handleMenu}
          >
            <img
              src={profile}
              alt="JM Profile"
              className="h-7 w-7 md:h-8 md:w-8"
            />
            <span className=" text-xs font-bold text-slate-100 dark:text-darkFont md:text-sm">
              {isSmallScreen ? "Menu" : "Connect!"}
            </span>
          </button>
        </div>
        <div
          className={`menu boder absolute right-0 top-11 flex flex-col items-center gap-4 rounded-md border bg-forms px-8 pb-8 pt-2 text-lightAccent shadow-xl duration-300 dark:bg-light dark:text-darkFont md:right-2 md:w-1/3 md:pb-4 lg:-right-5 lg:w-1/4 xl:w-1/5 ${menu ? "opacity-100" : "opacity-0"}`}
        >
          <span className="border-b-2 border-b-lightAccent text-sm font-semibold uppercase dark:border-b-darkFont">
            front-end developer
          </span>

          <Links socials={`hidden lg:flex`} />

          <ul className="flex flex-col items-center gap-14 text-lg md:pb-4 lg:hidden">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>

            <Links socials={`flex lg:hidden`} />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
