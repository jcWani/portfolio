import { contacts } from "../constants";
import { contactImg } from "../assets/images";

function Contact() {
  return (
    <section id="contact" className="py-28 dark:bg-[#0d192b]">
      <div className="container flex justify-center max-[360px]:px-[16px]">
        <div
          className="rounded-3x grid max-w-sm grid-cols-1 gap-6 
        overflow-hidden rounded-3xl border-t-4 border-primary shadow-lg md:max-w-3xl md:grid-cols-2 md:gap-0 lg:max-w-4xl dark:bg-[#14253d]"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center justify-center pb-8 md:pb-0">
            <span className="subheading">Get in touch</span>
            <h2 className="heading-secondary mb-3 lg:mb-6">Contact Me</h2>

            <ul className="list-none space-y-3">
              {contacts.map((contact) => (
                <li key={contact.link}>
                  <a
                    href={contact.href}
                    className="flex items-center gap-2 focus:outline focus:outline-primary/55 focus:ring-0 max-[360px]:gap-1"
                  >
                    <contact.icon className="text-2xl text-primary transition-colors duration-300 hover:text-primary-dark max-[400px]:text-xl max-[360px]:text-lg" />
                    <span className="text-lg font-medium text-black-600 decoration-black-500 underline-offset-[10px] transition-all duration-300 hover:text-black-500 hover:underline max-[400px]:text-base max-[360px]:text-sm">
                      {contact.link}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-first md:order-last">
            <img src={contactImg} alt="Men illustration" className="w-full" />
            <div className="absolute inset-0 w-full bg-contact-overlay dark:bg-contact-overlay-dark"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
