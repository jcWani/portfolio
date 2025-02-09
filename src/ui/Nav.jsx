import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import DarkModeToggle from "./DarkModeToggle";

import { useAOS } from "../hooks/useAos";

import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { AOS } = useAOS();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 shadow-lg backdrop-blur-md dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-8xl px-4 py-4 sm:px-6 md:px-8 lg:px-2">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-extrabold tracking-wide text-transparent focus:outline focus:outline-2 focus:outline-primary/70 focus:ring-0 dark:text-primary dark:focus:outline-primary/60"
            >
              JW
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-medium text-gray-700 transition-colors after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition after:duration-300 after:content-[''] hover:text-primary after:hover:scale-x-100 focus:outline focus:outline-2 focus:outline-primary/55 focus:ring-0 dark:text-gray-300 dark:focus:outline-primary/60`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex">
            <DarkModeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-primary focus:outline-none dark:text-gray-300"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <IoClose className="block h-8 w-8" />
                ) : (
                  <IoMenu className="block h-8 w-8" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "max-h-64 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div
          className={`space-y-1 px-2 pb-3 pt-2 text-center shadow-lg ${isScrolled ? "" : "bg-white dark:bg-[#0a192f]/95"}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-primary/5 hover:text-primary dark:text-gray-300 dark:hover:bg-primary/10 `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { AOS } = useAOS();

//   function handleIsOpen() {
//     setIsOpen((open) => !open);
//   }

//   return (
//     <header className="relative flex items-center justify-between px-4 py-6 md:px-12">
//       <a
//         href="#"
//         className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-extrabold tracking-wide text-transparent focus:outline focus:outline-2 focus:outline-primary/70 focus:ring-0 dark:text-primary dark:focus:outline-primary/60"
//       >
//         JW
//       </a>

//       <nav className="flex items-center justify-between">
//         <ul className="hidden items-center gap-8 md:flex lg:text-lg">
//           {navLinks.map((link) => (
//             <li key={link.label} onClick={handleIsOpen}>
//               <a
//                 href={link.href}
//                 className="text-gray-700 transition-all duration-300 hover:text-primary"
//               >
//                 {link.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="flex items-center gap-4">
//         <DarkModeToggle />
//         <Hamburger isOpen={isOpen} handleIsOpen={handleIsOpen} />
//       </div>
//     </header>
//   );
// }
