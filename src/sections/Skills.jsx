import { skills } from "../constants";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-[#ddd] px-4 py-28 md:px-8 dark:border-[#0a192f] dark:bg-[#0a192f]"
    >
      <div className="mx-auto max-w-5xl" data-aos="fade-up">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Explore My
          </span>
          <h2 className="mb-8 mt-2 text-4xl font-bold dark:text-white">
            My Skills
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`z-20 flex aspect-square flex-col items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white p-6 text-center transition-all hover:shadow-xl ${skill.hoverShadowColor} ${skill.hoverBgColor} ${skill.hoverBorderColor} duration-300 ease-in-out dark:border-[#112240] dark:bg-[#112240]`}
            >
              <img
                src={skill.logo}
                alt={skill.label}
                className={`mb-2 h-10 w-10 ${skill.darkLogo ? "dark:brightness-0 dark:invert" : ""}`}
              />
              <span
                className={`text-sm font-medium text-gray-800 dark:text-white`}
              >
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
