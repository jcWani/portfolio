import { IoOpenOutline, IoLogoGithub } from "react-icons/io5";
import { projects } from "../constants";
import { Button } from "../ui/Button";
import { useAOS } from "../hooks/useAos";

export default function Projects() {
  const { AOS } = useAOS();

  return (
    <section
      id="projects"
      className="border-b border-[#ddd] px-4 py-28 md:px-8 dark:border-[#0a192f] dark:bg-[#0a192f]"
    >
      <div className="mx-auto max-w-8xl">
        {/* Header */}
        <div className="mb-24" data-aos="fade-right">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Browse my
          </span>
          <h2 className="mb-8 mt-2 text-4xl font-bold dark:text-white">
            Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project) => (
            <div
              data-aos="fade-up"
              key={project.id}
              className={`flex flex-col items-center gap-12 ${
                project.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              }`}
            >
              <div className="z-20 flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="flex-1 space-y-4">
                <span className="text-7xl font-bold text-gray-200 md:text-8xl dark:text-primary-lighter">
                  {project.id}
                </span>
                <h3 className="text-3xl font-bold leading-tight md:text-4xl dark:text-gray-300">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2">
                  {project.tags &&
                    project.tags.map((tag) => (
                      <div key={tag.label}>
                        <span
                          className={`${tag.color} inline-block rounded-full px-2 py-1 text-xs font-medium uppercase tracking-wide`}
                        >
                          {tag.label}
                        </span>
                      </div>
                    ))}
                </div>

                <p className="leading-relaxed text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="flex items-center gap-2">
                  <Button icon={<IoOpenOutline />} href={project.hrefDemo}>
                    Demo
                  </Button>
                  <Button
                    icon={<IoLogoGithub />}
                    href={project.hrefGithub}
                    color="secondary"
                  >
                    Github
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
