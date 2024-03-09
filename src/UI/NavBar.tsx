import profile from "src/assets/profile.png";
import { useEffect, useRef, useState } from "react";
import { FaCode } from "react-icons/fa6";

function NavBar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

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
    <header className=" fixed left-0 top-0 w-full bg-light py-2 shadow-lg dark:bg-navBar">
      <nav
        className="container relative flex items-center justify-between"
        ref={menuRef}
      >
        <div className="flex items-center gap-4 font-bold">
          <FaCode size={32} className="text dark:text-white" />
          <p className=" text-lightBlue dark:text-darkRed md:text-2xl">
            Lon
            <span className="text-darkFont dark:text-white">zo</span>
          </p>
        </div>

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
            md:left-[3px] md:top-[2.2px]
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
            <span className=" text-xs font-bold text-lightAccent dark:text-darkFont md:text-base">
              Menu
            </span>
          </button>
        </div>
        <div
          className={`menu boder absolute right-0 top-11 flex flex-col items-center gap-4 rounded-md border bg-forms px-8 pb-8 pt-2 text-lightAccent shadow-xl duration-300 dark:bg-light dark:text-darkFont md:right-2 md:w-1/3 lg:-right-9 lg:w-1/4 xl:w-1/5 ${menu ? "opacity-100" : "opacity-0"}`}
        >
          <span className="border-b-2 border-b-lightAccent text-sm font-semibold uppercase dark:border-b-darkFont">
            front-end developer
          </span>
          <ul className="flex flex-col items-center gap-14 text-lg">
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
