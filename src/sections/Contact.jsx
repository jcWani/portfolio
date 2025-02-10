import { socialLinks, contacts } from "../constants";
import { useAOS } from "../hooks/useAos";

export default function Contact() {
  const { AOS } = useAOS();

  return (
    <section id="contact" className="px-4 py-28 dark:bg-[#0a192f]">
      <div className="mx-auto max-w-2xl" data-aos="fade-up">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contact Me
          </span>
          <h2 className="mb-8 mt-2 text-4xl font-bold dark:text-white">
            Let&apos;s connect
          </h2>
        </div>

        {/* Contact Card */}
        <div className="relative">
          {/* Content */}
          <div className="relative rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:p-8 dark:border-[#112240]/90 dark:bg-[#112240]">
            <div className="grid items-center gap-8">
              {/* Main Contact */}
              <div className="flex flex-col gap-6 min-[520px]:flex-row">
                {contacts.map((contact) => (
                  <a
                    key={contact.link}
                    href={contact.href}
                    className="group flex items-center gap-4 text-gray-700 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 dark:text-gray-300 dark:hover:text-primary"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 transition-colors group-hover:bg-blue-100 dark:bg-[#0a192f] dark:group-hover:bg-primary/10">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-medium">{contact.label}</p>
                      <p className="text-sm  text-gray-500 dark:text-gray-400">
                        {contact.link}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Social Links */}
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-4 transition-all duration-300 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/80 focus-visible:ring-offset-2 dark:bg-[#0a192f] dark:hover:bg-primary/20"
                  >
                    <span className="rounded-lg bg-white p-3 shadow-sm transition-all duration-300 group-hover:scale-110 dark:bg-[#112240]">
                      <link.icon className="h-6 w-6 text-gray-700 group-hover:text-primary dark:text-gray-300" />
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
