import { IoSchool } from "react-icons/io5";
import { contactImg } from "../assets/images";
import { useAOS } from "../hooks/useAos";

export default function AboutMe() {
  const { AOS } = useAOS();

  return (
    <section
      id="about"
      className="border-b border-[#ddd] px-4 py-28 md:px-8 dark:border-[#0a192f] dark:bg-[#0a192f]"
    >
      <div className="mx-auto max-w-6xl" data-aos="fade-up">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-0">
          {/* Image Container */}
          <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-full border-4 border-primary/80">
            <img src={contactImg} className="h-full w-full object-cover" />
            {/* <div className="absolute inset-0 bg-contact-overlay"></div> */}
          </div>

          {/* Content Container */}
          <div className="space-y-6">
            <div className="mb-8">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Get to know more
              </span>
              <h2 className="mb-8 mt-2 text-4xl font-bold dark:text-white">
                About Me
              </h2>
            </div>

            <div className="space-y-6 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                Hello! I&apos;m James, an aspiring front-end web developer with
                a passion for creating beautiful and functional web experiences.
                I enjoy designing and building things on the internet. I took a
                break after I graduated, and was unsure of what career path I
                would take. Now I find myself fascinated by the things you can
                make on the browser. Exploring front-end development has been an
                continuous learning journey for me.
              </p>

              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                <IoSchool className="h-10 w-10 text-primary" />
                <span>
                  BS Mathematics with specialization in Computer Science from
                  Bulacan State university
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
