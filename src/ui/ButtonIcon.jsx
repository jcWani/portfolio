function ButtonIcon({ children, onClick }) {
  return (
    <button
      className="text-primary rounded-sm border-none bg-none p-0.5 text-2xl transition-all duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
