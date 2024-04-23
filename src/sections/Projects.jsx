import {
  wayfarersRestImg,
  wayfarersRestLogo,
  crustAndCraftImg,
  crustAndCraftLogo,
  travelSnapImg,
  travelSnapLogo,
} from "../assets/images";

import ProjectDetailsBox from "../ui/ProjectDetailsBox";
import ProjectImgBox from "../ui/ProjectImgBox";

function Projects() {
  return (
    <section
      className="border-b border-[#ddd] py-28 dark:border-[#112240] dark:bg-[#112240]"
      id="projects"
    >
      <div className="container" data-aos="fade-right">
        <span className="subheading">Browse My Recent</span>
        <h2 className="heading-secondary md:mb-4 lg:mb-10 xl:mb-16">
          Projects
        </h2>
      </div>

      <div className="container grid grid-cols-1 items-center  gap-y-14 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-16 xl:gap-x-20 xl:gap-y-20">
        <ProjectImgBox
          img={wayfarersRestImg}
          label="Wayfarers Rest"
          logo={wayfarersRestLogo}
          order="lg:order-1"
        />
        <ProjectDetailsBox
          num="01"
          label="Wayfarers Rest"
          hrefDemo="https://wayfarers-rest.vercel.app/"
          hrefGithub="https://github.com/jcWani/wayfarers-rest"
          tags={[{ label: "react", color: "bg-[#61DBFB]" }]}
          order="lg:order-2"
        >
          Wayfarers Rest Hotel Management Application is a web-based platform
          designed to streamline hotel operations. Developed using React
          technology, this application empowers hotel staff to efficiently
          manage rooms, bookings, and guest services.
        </ProjectDetailsBox>

        <ProjectImgBox
          img={crustAndCraftImg}
          label="Crust & Craft"
          logo={crustAndCraftLogo}
          order="lg:order-4"
        />
        <ProjectDetailsBox
          num="02"
          label="Crust & Craft"
          hrefDemo="https://crust-and-craft.vercel.app/"
          hrefGithub="https://github.com/jcWani/crust-and-craft"
          tags={[
            { label: "react", color: "bg-[#61DBFB]" },
            { label: "tailwind", color: "bg-[#38bdf8]" },
          ]}
          order="lg:order-3"
        >
          The Crust & Craft web app is a simple tool for ordering pizza fast. It
          comes with handy features to make your pizza experience smooth and
          enjoyable.
        </ProjectDetailsBox>

        <ProjectImgBox
          img={travelSnapImg}
          label="TravelSnap"
          logo={travelSnapLogo}
          order="lg:order-5"
        />
        <ProjectDetailsBox
          num="03"
          label="TravelSnap"
          hrefDemo="https://travelsnap.vercel.app/"
          hrefGithub="https://github.com/jcWani/travelsnap"
          tags={[{ label: "react", color: "bg-[#61DBFB]" }]}
          order="lg:order-6"
        >
          Your travel diary application for documenting your adventures around
          the world. With Travelsnap, you can effortlessly save and revisit the
          places you&apos;ve traveled to, ensuring that your cherished memories
          are always just a tap away.
        </ProjectDetailsBox>
      </div>
    </section>
  );
}

export default Projects;
