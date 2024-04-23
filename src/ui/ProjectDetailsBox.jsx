import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import Button from "../ui/Button";
import TagSkill from "./TagSkill";

function ProjectDetailsBox({
  children,
  num,
  label,
  hrefDemo,
  hrefGithub,
  tags,
  order,
}) {
  return (
    <div className={`${order ? order : ""}`} data-aos="fade-up">
      <span className="text-5xl font-semibold text-black-300 max-[400px]:text-4xl lg:text-6xl xl:text-7xl">
        {num}
      </span>
      <h3 className="heading-tertiary mb-2">{label}</h3>

      <div className="space space-x-2">
        {tags.map((tag) => (
          <TagSkill
            key={tag.label}
            tagLabel={tag.label}
            tagBgColor={tag.color}
          />
        ))}
      </div>

      <p className="mb-6 leading-normal text-black-600">{children}</p>

      <div className="space-x-2">
        <Button
          type="primary"
          width="w-[25%] md:w-[20%] lg:w-[25%] xl:w-[20%] max-[400px]:w-[35%]"
          href={hrefDemo}
          target="_blank"
          letterSpacing="tracking-wide"
        >
          <IoOpenOutline className=" shrink-0 text-lg" />
          <span>Demo</span>
        </Button>

        <Button
          type="secondary"
          width="w-[25%] md:w-[20%] lg:w-[25%] xl:w-[20%] max-[400px]:w-[35%]"
          href={hrefGithub}
          target="_blank"
          letterSpacing="tracking-wide"
        >
          <IoLogoGithub className=" shrink-0 text-lg" />
          <span>Github</span>
        </Button>
      </div>
    </div>
  );
}

export default ProjectDetailsBox;
