import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import { useDarkMode } from "../contexts/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="flex items-center gap-2 max-lg:flex-row-reverse">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          id="switch"
          type="checkbox"
          className="peer sr-only"
          onChange={toggleDarkMode}
          checked={isDarkMode}
        />
        <label htmlFor="switch" className="hidden"></label>
        <div className="peer h-6 w-11 rounded-full border bg-slate-300 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-200 peer-checked:after:translate-x-full peer-checked:after:border-[#0a192f] peer-checked:after:bg-[#0a192f] dark:after:translate-x-full"></div>
      </label>

      {isDarkMode ? (
        <IoSunnyOutline className="text-xl text-primary" />
      ) : (
        <IoMoon className="text-xl text-primary" />
      )}
    </div>
  );
}

export default DarkModeToggle;
