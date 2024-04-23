import { useRef } from "react";
import { useAOS } from "../hooks/useAos";

import { socialLinks } from "../constants";
import { heroImg } from "../assets/images";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import Button from "../ui/Button";
import { useTyped } from "../hooks/useTyped";

function Hero() {
  const ref = useRef(null);
  const typeRef = useRef(null);
  const heroSecIsIntersecting = useIntersectionObserver(ref, {
    root: null,
    threshold: 0,
    rootMargin: `-86px`,
  });

  if (!heroSecIsIntersecting) document.body.classList.add("stick");
  else document.body.classList.remove("stick");

  const { AOS } = useAOS();
  useTyped(typeRef);

  return (
    <section
      id="home"
      ref={ref}
      className="flex min-h-[calc(100vh-96px)] items-center justify-center dark:bg-[#0a192f]"
    >
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-0">
        <div className="text-center lg:text-start" data-aos="fade-right">
          <h1 className="whitespace-nowrap text-5xl font-bold leading-normal tracking-tight max-[500px]:text-4xl max-[320px]:text-3xl md:mb-2 md:text-6xl lg:mb-4 xl:text-7xl">
            Hello! I&apos;m{" "}
            <span className="font-bold text-primary">James</span>
          </h1>
          <p className="whitespace-nowrap text-2xl font-medium leading-normal tracking-tight text-black-700 max-[500px]:text-xl max-[320px]:text-lg md:text-3xl xl:text-3xl">
            <span ref={typeRef}></span>
          </p>

          <ul className="mt-4 flex list-none items-center justify-center gap-3 first:rounded-full lg:mt-8 lg:justify-start">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  rel="noreferrer"
                  href={social.href}
                  target="_blank"
                  className="focus:outline-primary/55 focus:ring-0 dark:focus:outline-primary"
                >
                  <social.icon
                    className={`text-4xl text-primary transition-all duration-300 hover:scale-125 active:scale-110 md:text-5xl`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 space-x-3 max-[370px]:flex max-[370px]:flex-col max-[370px]:items-center max-[370px]:justify-center max-[370px]:gap-2 max-[370px]:space-x-0">
            <Button
              type="primary"
              href="/resume-james-waniwan.pdf"
              target="_blank"
              width="w-[30%] md:w-[20%] lg:w-[37%] xl:w-[30%] max-[500px]:w-[35%] max-[370px]:w-[50%]"
              letterSpacing="lg:tracking-widest"
            >
              Download CV
            </Button>
            <Button
              type="secondary"
              href="#contact"
              width="w-[30%] md:w-[20%] lg:w-[37%] xl:w-[30%] max-[500px]:w-[35%] max-[370px]:w-[50%]"
              letterSpacing="lg:tracking-widest"
              target="_self"
            >
              Contact
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center" data-aos="fade-left">
          <img
            src={heroImg}
            alt="hero image"
            className="border-animated w-[70%] md:w-[50%] lg:w-full xl:w-[90%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
