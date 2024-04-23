import { socialLinks } from "../constants";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-10 dark:bg-[#112240]">
      <div className="container space-y-2 text-center text-sm leading-normal text-white dark:text-slate-200">
        <ul className="flex list-none items-center justify-center gap-1.5">
          {socialLinks.map((social) => (
            <li key={social.label} className="focus:ring-0">
              <a
                rel="noreferrer"
                href={social.href}
                target="_blank"
                className="focus:outline-primary/55 focus:ring-0"
              >
                <social.icon className="text-3xl text-white transition-all duration-300 hover:scale-125 active:scale-110 dark:text-slate-200" />
              </a>
            </li>
          ))}
        </ul>

        <p className="leading-normal">James Christoper C. Waniwan</p>
        <p className="leading-normal">
          Copyright &copy; {currentYear}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
