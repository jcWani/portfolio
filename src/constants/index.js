import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
  IoCall,
  IoMail,
} from "react-icons/io5";

import {
  tailwindIcon,
  htmlIcon,
  cssIcon,
  javascriptIcon,
  reactIcon,
  nextjsIcon,
  typescriptIcon,
  supabaseIcon,
  unityIcon,
  gitIcon,
} from "../assets/icons";

export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "Facebook",
    icon: IoLogoFacebook,
    href: "https://www.facebook.com/jamesCwaniwan",
  },
  {
    label: "Linkedin",
    icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/jameswaniwan",
  },
  {
    label: "Github",
    icon: IoLogoGithub,
    href: "https://github.com/jcWani",
  },
];

export const skills = [
  {
    label: "HTML",
    icon: htmlIcon,
  },
  {
    label: "CSS",
    icon: cssIcon,
  },
  {
    label: "Javascript",
    icon: javascriptIcon,
  },
  {
    label: "React",
    icon: reactIcon,
  },
  {
    label: "Tailwind",
    icon: tailwindIcon,
  },
  {
    label: "Next.js",
    icon: nextjsIcon,
  },
  {
    label: "Typescript",
    icon: typescriptIcon,
  },
  {
    label: "Supabase",
    icon: supabaseIcon,
  },
  {
    label: "Git",
    icon: gitIcon,
  },
  {
    label: "Unity",
    icon: unityIcon,
  },
];

export const contacts = [
  {
    link: "jameswaniwan@gmail.com",
    href: "mailto:jameswaniwan@gmail.com",
    icon: IoMail,
  },
  {
    link: "linkedin.com/in/jameswaniwan",
    href: "https://www.linkedin.com/in/jameswaniwan",
    icon: IoLogoLinkedin,
  },
  {
    link: "0917-453-6451",
    href: "tel:0917-453-6451",
    icon: IoCall,
  },
];
