function ProjectImgBox({ img, label, logo, order }) {
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
      <img
        src={logo}
        alt="Project logo"
        className="rotate absolute bottom-[-9px] right-[-9px] w-[15%] rounded-full shadow-md md:right-[120px] md:w-[10%] lg:right-[-5px] lg:w-[15%]"
        data-aos="zoom-in"
      />
    </div>
  );
}

export default ProjectImgBox;
