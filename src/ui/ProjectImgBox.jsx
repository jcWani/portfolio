function ProjectImgBox({ img, label, order }) {
  return (
    <div
      className={`relative flex translate-y-6 items-center justify-center lg:translate-y-0 ${order ? order : ""}`}
    >
      <img
        src={img}
        alt={label}
        className="w-full rounded-3xl shadow-xl md:w-[70%] lg:w-full"
        data-aos="fade-up"
      />
    </div>
  );
}

export default ProjectImgBox;
