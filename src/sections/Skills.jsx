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
          className="grid list-none items-center justify-items-center gap-y-4 max-[320px]:grid-cols-2 min-[320px]:grid-cols-3 min-[320px]:gap-y-8  min-[500px]:grid-cols-4 sm:grid-cols-5 sm:gap-y-10 md:grid-cols-4 md:gap-y-2 lg:grid-cols-4 lg:gap-y-6"
          data-aos="fade-left"
        >
          {skills.map((skill) => (
            <li
              key={skill.label}
              className="flex w-20 flex-col items-center justify-center gap-3 transition-all duration-300 md:py-2.5"
            >
              <img src={skill.icon} alt={skill.label} className="h-12 w-12" />
              <span className="font-medium">{skill.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
