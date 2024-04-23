import Lottie from "lottie-react";
import animationData from "../assets/lottie/coding.json";
import animationDataDark from "../assets/lottie/coding-dark.json";
import { useDarkMode } from "../contexts/DarkModeContext";

import { skills } from "../constants";
import { useAOS } from "../hooks/useAos";

function Skills() {
  const { isDarkMode } = useDarkMode();
  const { AOS } = useAOS();

  return (
    <section
      id="skills"
      className="border-b border-[#ddd] py-28 dark:border-[#0d192b] dark:bg-[#0a192f]"
    >
      <div className="container mb-2 text-center md:mb-10" data-aos="fade-up">
        <span className="subheading">Explore My</span>
        <h2 className="heading-secondary">Skills</h2>
      </div>
      <div className="container grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4 lg:gap-6">
        <div className="flex items-center justify-center">
          {isDarkMode ? (
            <Lottie
              animationData={animationDataDark}
              loop={true}
              className="w-full sm:w-[90%] md:w-full"
              data-aos="zoom-in-right"
            />
          ) : (
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full sm:w-[90%] md:w-full"
              data-aos="fade-right"
            />
          )}
        </div>

        <ul
          className="grid list-none grid-cols-2 gap-x-4 gap-y-6 px-10 max-[375px]:px-2 sm:grid-cols-3 sm:px-20 md:px-0 md:py-4 lg:px-7 lg:py-7 xl:px-20 xl:py-20"
          data-aos="fade-left"
        >
          {skills.map((skill) => (
            <li
              key={skill.label}
              className="flex flex-col 
              items-center justify-center gap-2 rounded-xl border-t-4 border-t-primary bg-white py-5 shadow-lg transition-all duration-300 md:py-2.5 dark:bg-[#14253d]"
            >
              <img
                src={skill.icon}
                alt={skill.label}
                className="h-12 w-12 max-[375px]:h-10 max-[375px]:w-10"
              />
              <span className="font-medium">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
