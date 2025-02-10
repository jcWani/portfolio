import { heroImg } from "../assets/images";
import { socialLinks } from "../constants";
import { useAOS } from "../hooks/useAos";
import { Button } from "../ui/Button";
import { IoDownloadOutline } from "react-icons/io5";

export default function Hero() {
  const { AOS } = useAOS();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-8 py-20 dark:bg-[#0a192f]"
    >
      <div className="mx-auto grid max-w-8xl items-center justify-items-center gap-12 md:grid-cols-2">
        <div className="z-20 text-center md:text-start" data-aos="fade-right">
          <div className="mb-8">
            <h1 className="text-4xl font-normal md:text-6xl dark:text-white">
              Hello I&apos;m{" "}
              <span className="font-bold text-primary">James Waniwan</span>
            </h1>
          </div>

          <ul className="mb-2 flex justify-center gap-4 md:mb-4 md:justify-start">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-block text-primary transition-all duration-300 ease-in-out hover:scale-125 focus:outline-primary/80 focus:ring-0 dark:focus:outline-primary"
                >
                  <social.icon className="h-auto w-10 lg:w-12" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center gap-2 md:justify-start lg:gap-4">
            <Button
              icon={<IoDownloadOutline />}
              href="/resume-james-waniwan.pdf"
              className="tracking-wide lg:gap-3 lg:px-6 lg:py-3 lg:text-lg"
            >
              Resume
            </Button>
            <Button
              className="tracking-wide lg:gap-3 lg:px-6 lg:py-3 lg:text-lg"
              href="#contact"
              color="secondary"
              target={false}
            >
              Contacts
            </Button>
          </div>
        </div>

        <div className="z-20" data-aos="fade-left">
          <img
            src={heroImg}
            alt="hero image"
            className="border-animated max-w-64 sm:max-w-sm lg:max-w-full"
          />
        </div>

        <div className="absolute inset-5">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
      </div>
    </section>
  );
}
