import {
  wayfarersRestImg,
  crustAndCraftImg,
  travelSnapImg,
  wayfarersRestWebsiteImg,
  paystationImg,
  mathrunImg,
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
        {/* WAYFARERS REST WEBSITE */}
        <ProjectImgBox
          img={wayfarersRestWebsiteImg}
          label="Wayfarers Rest Website"
          order="lg:order-1"
        />
        <ProjectDetailsBox
          num="01"
          label="Wayfarers Rest Website"
          hrefDemo="https://wayfarers-rest-website.vercel.app/"
          hrefGithub="https://github.com/jcWani/wayfarers-rest-website"
          tags={[
            { label: "react", color: "bg-[#61DBFB]" },
            { label: "next.js", color: "bg-[#D32F2F]" },
            { label: "tailwind", color: "bg-[#38bdf8]" },
            { label: "supabase", color: "bg-[#00C853]" },
          ]}
          order="lg:order-2"
        >
          Welcome to Wayfarers Rest, a web application built to offer users an
          immersive and peaceful online experience. Developed using React and
          Next.js this web app for the clients. It provides users with the
          ability to browse rooms, make bookings, manage their reservations, and
          interact with the Wayfarers Rest&apos;s services.
        </ProjectDetailsBox>

        {/* WAYFARERS REST */}
        <ProjectImgBox
          img={wayfarersRestImg}
          label="Wayfarers Rest"
          order="lg:order-4"
        />
        <ProjectDetailsBox
          num="02"
          label="Wayfarers Rest"
          hrefDemo="https://wayfarers-rest.vercel.app/"
          hrefGithub="https://github.com/jcWani/wayfarers-rest"
          tags={[{ label: "react", color: "bg-[#61DBFB]" }]}
          order="lg:order-3"
        >
          Wayfarers Rest is an hotel management web application. Developed using
          react, this web app designed for the employees of Wayfarers Rest. It
          allows them to manage the operations such as booking management,
          customer information, room availability, and other administrative
          tasks.
        </ProjectDetailsBox>

        {/* CRUST & CRAFT */}
        <ProjectImgBox
          img={crustAndCraftImg}
          label="Crust & Craft"
          order="lg:order-5"
        />
        <ProjectDetailsBox
          num="03"
          label="Crust & Craft"
          hrefDemo="https://crust-and-craft.vercel.app/"
          hrefGithub="https://github.com/jcWani/crust-and-craft"
          tags={[
            { label: "react", color: "bg-[#61DBFB]" },
            { label: "tailwind", color: "bg-[#38bdf8]" },
          ]}
          order="lg:order-6"
        >
          The Crust & Craft web app is a simple tool for ordering pizza. It
          comes with handy features to make your pizza experience smooth and
          enjoyable.
        </ProjectDetailsBox>

        {/* TRAVEL SNAP */}
        <ProjectImgBox
          img={travelSnapImg}
          label="TravelSnap"
          order="lg:order-8"
        />
        <ProjectDetailsBox
          num="04"
          label="TravelSnap"
          hrefDemo="https://travelsnap.vercel.app/"
          hrefGithub="https://github.com/jcWani/travelsnap"
          tags={[{ label: "react", color: "bg-[#61DBFB]" }]}
          order="lg:order-7"
        >
          Your travel diary application for documenting your adventures around
          the world. With Travelsnap, you can effortlessly save the places
          you&apos;ve traveled to, ensuring that your cherished memories are
          always just a tap away.
        </ProjectDetailsBox>

        {/* PAYSTATION */}
        <ProjectImgBox
          img={paystationImg}
          label="Paystation"
          order="lg:order-9"
        />
        <ProjectDetailsBox
          num="05"
          label="Paystation"
          hrefDemo="https://jcwani.github.io/paystation/"
          hrefGithub="https://github.com/jcWani/paystation"
          tags={[
            { label: "html", color: "bg-[#FF7043]" },
            { label: "css", color: "bg-[#29B6F6]" },
            { label: "javascript", color: "bg-[#FFCC00]" },
          ]}
          order="lg:order-10"
        >
          Paystation is a fictional company offering games and a subscription
          service. The landing page is designed to showcase Paystation&apos;s
          products and services while providing an engaging and interactive user
          experience.
        </ProjectDetailsBox>

        {/* MATHRUN */}
        <ProjectImgBox img={mathrunImg} label="Mathrun" order="lg:order-12" />
        <ProjectDetailsBox
          num="06"
          label="Mathrun"
          hrefDemo="https://jmswani.itch.io/mathrun"
          hrefGithub="https://github.com/jcWani/Mathrun"
          tags={[{ label: "unity", color: "bg-[#D5AAFF]" }]}
          order="lg:order-11"
        >
          Mathrun is an endless runner android game. The concept of the game
          revolves around the player avoiding obstacles for as long as he can
          while collecting coins and powerups. As the player collect coins it
          will fill up a bar and once it is full a question about vector
          operations will appear. Providing a right answer will give the player
          a bonus score in the game. Test you reflexes and math skills, and set
          the highest score.
        </ProjectDetailsBox>
      </div>
    </section>
  );
}

export default Projects;
