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
    <header className=" dark:bg-navBar fixed left-0 top-0 w-full bg-light py-4 shadow-lg">
      <nav className="container relative hidden items-center justify-between md:flex">
        <div className="flex items-center gap-4 font-bold">
          <FaCode size={32} className="text dark:text-white" />
          <p className="dark:text-darkRed text-lightBlue text-2xl">
            Lon
            <span className="text-darkFont dark:text-white">zo</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <label
            htmlFor="check"
            className="relative h-6 w-12 cursor-pointer rounded-full bg-cards p-1 shadow-md  duration-300 dark:bg-light"
          >
            <input
              type="checkbox"
              className="peer sr-only"
              id="check"
              onChange={handleThemeSwitch}
              checked={theme === "dark"}
            />
            <span className="bg-lightAccent absolute left-[3px] top-[2.2px] h-4/5 w-2/5 rounded-full duration-300 peer-checked:left-[26px] peer-checked:bg-forms"></span>
          </label>
          <button
            className="dark:bg-lightAccent  flex cursor-pointer items-center gap-4 rounded-full bg-cards p-1 pr-4"
            onClick={handleMenu}
          >
            <img src={profile} alt="JM Profile" className="h-8 w-8" />
            <span className=" dark:text-darkFont text-lightAccent font-bold">
              Menu
            </span>
          </button>
        </div>
        <div
          ref={menuRef}
          className={`menu boder text-lightAccent dark:text-darkFont absolute top-14 flex flex-col items-center gap-4 rounded-md border   bg-forms px-8 pb-8 pt-2 shadow-xl duration-300 dark:bg-light md:right-2 md:w-1/4 lg:-right-4 xl:w-1/5 ${menu ? "opacity-100" : "opacity-0"}`}
        >
          <span className="dark:border-b-darkFont border-b-lightAccent border-b-2 font-semibold uppercase">
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
