import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
  IoCall,
  IoMail,
} from "react-icons/io5";

import {
  tailwindLogo,
  htmlLogo,
  cssLogo,
  javascriptLogo,
  reactLogo,
  nextjsLogo,
  typescriptLogo,
  supabaseLogo,
  unityLogo,
  gitLogo,
  drizzleLogo,
  neonLogo,
  shadcnLogo,
} from "../assets/logos";

import {
  wayfarersRestImg,
  crustAndCraftImg,
  wayfarersRestWebsiteImg,
  paystationImg,
  mathrunImg,
  packportImg,
} from "../assets/images";

export const navLinks = [
  { href: "#", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
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
    logo: htmlLogo,
    hoverBgColor: "hover:bg-[#FF7043]/10",
    hoverBorderColor: "hover:border-[#FF7043]",
    hoverShadowColor: "hover:shadow-[#FF7043]/20",
  },
  {
    label: "CSS",
    logo: cssLogo,
    hoverBgColor: "hover:bg-[#29B6F6]/10",
    hoverBorderColor: "hover:border-[#29B6F6]",
    hoverShadowColor: "hover:shadow-[#29B6F6]/20",
  },
  {
    label: "Javascript",
    logo: javascriptLogo,
    hoverBgColor: "hover:bg-[#FFCC00]/10",
    hoverBorderColor: "hover:border-[#FFCC00]",
    hoverShadowColor: "hover:shadow-[#FFCC00]/20",
  },
  {
    label: "React",
    logo: reactLogo,
    hoverBgColor: "hover:bg-[#61DBFB]/10",
    hoverBorderColor: "hover:border-[#61DBFB]",
    hoverShadowColor: "hover:shadow-[#61DBFB]/20",
  },
  {
    label: "Next.js",
    logo: nextjsLogo,
    hoverBgColor: "hover:bg-gray-100 dark:hover:bg-gray-950/50",
    hoverBorderColor: "hover:border-black",
    hoverShadowColor: "hover:shadow-gray-300 dark:hover:shadow-gray-700",
    darkLogo: true,
  },
  {
    label: "Typescript",
    logo: typescriptLogo,
    hoverBgColor: "hover:bg-[#2f74c0]/10",
    hoverBorderColor: "hover:border-[#2f74c0]",
    hoverShadowColor: "hover:shadow-[#2f74c0]/20",
  },
  {
    label: "Tailwind CSS",
    logo: tailwindLogo,
    hoverBgColor: "hover:bg-[#38bdf8]/10",
    hoverBorderColor: "hover:border-[#38bdf8]",
    hoverShadowColor: "hover:shadow-[#38bdf8]/20",
  },
  {
    label: "shadcn",
    logo: shadcnLogo,
    hoverBgColor: "hover:bg-gray-100 dark:hover:bg-gray-950/50",
    hoverBorderColor: "hover:border-black",
    hoverShadowColor: "hover:shadow-gray-300 dark:hover:shadow-gray-700",
    darkLogo: true,
  },
  {
    label: "Supabase",
    logo: supabaseLogo,
    hoverBgColor: "hover:bg-[#00C853]/10",
    hoverBorderColor: "hover:border-[#00C853]",
    hoverShadowColor: "hover:shadow-[#00C853]/20",
  },
  {
    label: "Git",
    logo: gitLogo,
    hoverBgColor: "hover:bg-[#e84e31]/10",
    hoverBorderColor: "hover:border-[#e84e31]",
    hoverShadowColor: "hover:shadow-[#e84e31]/20",
  },
  {
    label: "Drizzle ORM",
    logo: drizzleLogo,
    hoverBgColor: "hover:bg-[#b7f90d]/10",
    hoverBorderColor: "hover:border-[#b7f90d]",
    hoverShadowColor: "hover:shadow-[#b7f90d]/20",
  },
  {
    label: "NeonDB",
    logo: neonLogo,
    hoverBgColor: "hover:bg-[#08d9cc]/10",
    hoverBorderColor: "hover:border-[#08d9cc]",
    hoverShadowColor: "hover:shadow-[#08d9cc]/20",
  },

  {
    label: "Unity",
    logo: unityLogo,
    hoverBgColor: "hover:bg-gray-100 dark:hover:bg-gray-950/50",
    hoverBorderColor: "hover:border-black",
    hoverShadowColor: "hover:shadow-gray-300 dark:hover:shadow-gray-700",
    darkLogo: true,
  },
];

export const projects = [
  {
    id: "01",
    title: "Packport",
    description:
      "PackPort is a modern e-commerce website that showcases different kinds of bags. This project was built as part of my learning journey, following The Ultimate Fullstack Next.JS 14 Course 2024 Edition by DevelopedByEd. It helped me gain hands-on experience with Next.js, authentication, payments, and more while customizing and expanding upon the base project.",
    image: packportImg,
    hrefDemo: "https://packport.vercel.app/",
    hrefGithub: "https://github.com/jcWani/packport",
    tags: [
      { label: "next.js", color: "bg-[#f07167]" },
      { label: "typescript", color: "bg-[#8ecae6]" },
      { label: "shadcn", color: "bg-[#f6aa1c]" },
      { label: "drizzle", color: "bg-[#b7f90d]" },
      { label: "neon", color: "bg-[#08d9cc]" },
    ],
    imagePosition: "left",
  },
  {
    id: "02",
    title: "Wayfarers Rest Website",
    description:
      "An immersive booking platform built with Next.js, Supabase, and Tailwind CSS, inspired by The Ultimate React Course 2024 by Jonas Schmedtmann. This project showcases a seamless way to browse and reserve cozy cabins.",
    image: wayfarersRestImg,
    hrefDemo: "https://wayfarers-rest-website.vercel.app/",
    hrefGithub: "https://github.com/jcWani/wayfarers-rest-website",
    tags: [
      { label: "react", color: "bg-[#61DBFB]" },
      { label: "next.js", color: "bg-[#f07167]" },
      { label: "tailwind", color: "bg-[#38bdf8]" },
      { label: "supabase", color: "bg-[#00C853]" },
    ],
    imagePosition: "right",
  },
  {
    id: "03",
    title: "Wayfarers Rest",
    description:
      "Developed as part of the Udemy course The Ultimate React Course 2024 by Jonas Schmedtmann, Wayfarers Rest is a hotel management web application designed for employees to efficiently manage bookings, customer details, room availability, and administrative tasks.",
    image: wayfarersRestWebsiteImg,
    hrefDemo: "https://wayfarers-rest.vercel.app/",
    hrefGithub: "https://github.com/jcWani/wayfarers-rest",
    tags: [
      { label: "react", color: "bg-[#61DBFB]" },
      { label: "supabase", color: "bg-[#00C853]" },
    ],
    imagePosition: "left",
  },
  {
    id: "04",
    title: "Crust & Craft",
    description:
      "This project was built as part of The Ultimate React Course 2024 by Jonas Schmedtman, with additional enhancements and refinements. Crust & Craft is a simple yet efficient pizza ordering app designed for a seamless user experience.",
    image: crustAndCraftImg,
    hrefDemo: "https://crust-and-craft.vercel.app/",
    hrefGithub: "https://github.com/jcWani/crust-and-craft",
    tags: [
      { label: "react", color: "bg-[#61DBFB]" },
      { label: "tailwind", color: "bg-[#38bdf8]" },
    ],
    imagePosition: "right",
  },
  {
    id: "05",
    title: "Paystation",
    description:
      "Paystation is a fictional company offering games and a subscription service. The landing page is designed to showcase Paystation's products and services while providing an engaging and interactive user experience.",
    image: paystationImg,
    hrefDemo: "https://jcwani.github.io/paystation/",
    hrefGithub: "https://github.com/jcWani/paystation",
    tags: [
      { label: "html", color: "bg-[#FF7043]" },
      { label: "css", color: "bg-[#29B6F6]" },
      { label: "javascript", color: "bg-[#FFCC00]" },
    ],
    imagePosition: "left",
  },
  {
    id: "06",
    title: "Mathrun",
    description:
      "Mathrun is an endless runner android game. The concept of the game revolves around the player avoiding obstacles for as long as he can while collecting coins and powerups. As the player collect coins it will fill up a bar and once it is full a question about vector operations will appear. Providing a right answer will give the player a bonus score in the game. Test you reflexes and math skills, and set the highest score.",
    image: mathrunImg,
    hrefDemo: "https://jmswani.itch.io/mathrun",
    hrefGithub: "https://github.com/jcWani/Mathrun",
    tags: [{ label: "unity", color: "bg-[#D5AAFF]" }],
    imagePosition: "right",
  },
];

export const contacts = [
  {
    label: "Mail",
    link: "jameswaniwan@gmail.com",
    href: "mailto:jameswaniwan@gmail.com",
    icon: IoMail,
  },
  {
    label: "Phone",
    link: "0917-453-6451",
    href: "tel:0917-453-6451",
    icon: IoCall,
  },
];
