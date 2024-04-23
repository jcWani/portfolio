import { aboutImg } from "../assets/images";
import { useAOS } from "../hooks/useAos";
import Divider from "../ui/Divider";

function AboutMe() {
  const { AOS } = useAOS();

  return (
    <section
      id="about"
      className="relative bg-primary-lighter pb-28 pt-32 dark:bg-[#112240]"
    >
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-0 lg:pb-12">
        <div className="flex items-center justify-center">
          <img
            src={aboutImg}
            alt="about me image"
            className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-full xl:w-[90%]"
            data-aos="fade-right"
          />
        </div>

        <div data-aos="fade-left">
          <span className="subheading">Get to know more</span>
          <h2 className="heading-secondary">About Me</h2>
          <div className="mt-5 space-y-4 text-black-600">
            <p className="leading-relaxed">
              Hello there! I&apos;m <span className="font-bold">James</span>, an
              aspiring front-end web developer with a passion for creating
              beautiful and functional web experiences. I enjoy designing and
              building things on the internet.
            </p>
            <p className="leading-relaxed">
              I took a break after I graduated, and was unsure of what career
              path I would take. I only scratched the surface of development
              during my time in college, but now I find myself fascinated by the
              things you can build with it. Exploring front-end development has
              been an continuous learning journey for me.
            </p>
            <p className="pb-8 leading-relaxed md:pb-14 lg:pb-0">
              Outside of coding, you&apos;ll often find me indulging in video
              games, going for a jog around our neighborhood, or getting lost in
              the pages of a good book. I believe in maintaining a healthy
              work-life balance and finding inspiration around us.
            </p>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}

export default AboutMe;
