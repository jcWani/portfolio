function Hamburger({ isOpen, handleIsOpen }) {
  const base =
    "my-2 h-[2px] w-[35px] bg-black-800 transition duration-300 rounded-full";

  return (
    <div
      className="z-50 hidden cursor-pointer max-lg:block"
      onClick={handleIsOpen}
    >
      <div
        className={
          base + `${isOpen ? ` translate-y-2.5 -rotate-45 transform` : ""}`
        }
      ></div>
      <div className={base + `${isOpen ? ` opacity-0` : ""}`}></div>
      <div
        className={
          base + `${isOpen ? ` -translate-y-2.5 rotate-45 transform` : ""}`
        }
      ></div>
    </div>
  );
}

export default Hamburger;
