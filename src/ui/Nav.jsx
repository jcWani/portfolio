import { useState } from "react";
import { navLinks } from "../constants";
import DarkModeToggle from "./DarkModeToggle";

import Hamburger from "./Hamburger";
import { useAOS } from "../hooks/useAos";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { AOS } = useAOS();

  function handleIsOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <header className="relative flex h-24 items-center justify-between px-6 min-[1480px]:px-10 dark:bg-[#0a192f]">
      <a
        href="#"
        className="text-4xl font-extrabold tracking-wide text-primary focus:outline focus:outline-2 focus:outline-primary/55 focus:ring-0 dark:focus:outline-primary/60"
        data-aos="fade-down"
      >
        JW
      </a>

      <nav className="flex items-center justify-between" data-aos="fade-down">
        <ul
          className={`flex list-none items-center justify-center gap-14 max-lg:absolute max-lg:inset-0 max-lg:z-50 max-lg:h-dvh max-lg:flex-col max-lg:gap-16 max-lg:bg-[rgba(255,255,255,0.9)] max-lg:backdrop-blur max-lg:transition-all max-lg:duration-500 max-lg:ease-in dark:max-lg:bg-[rgb(10,25,47,0.9)] ${isOpen ? ` max-lg:pointer-events-auto max-lg:visible max-lg:translate-x-0 max-lg:opacity-100` : " max-lg:pointer-events-none max-lg:invisible max-lg:translate-x-full max-lg:opacity-0"}`}
        >
          {navLinks.map((link) => (
            <li key={link.label} onClick={handleIsOpen}>
              <a
                href={link.href}
                className="relative block w-fit text-lg leading-normal transition-colors duration-300 after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition after:duration-300 after:content-[''] hover:text-primary after:hover:scale-x-100 focus:outline focus:outline-2 focus:outline-primary/55 focus:ring-0 dark:text-slate-200 dark:focus:outline-primary/60"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4" data-aos="fade-down">
        <DarkModeToggle />
        <Hamburger isOpen={isOpen} handleIsOpen={handleIsOpen} />
      </div>
    </header>
  );
}

export default Nav;
