function Button({
  children,
  type,
  href,
  onClick,
  width,
  target,
  icon,
  letterSpacing,
}) {
  const base = `inline-block text-sm rounded-xl font-semibold uppercase text-black-50 transition-all duration-300 focus:text-zinc-600 focus:bg-primary-light focus:outline-none focus:ring focus:ring-primary-light focus:border-primary-light focus:ring-offset-2 disabled:cursor-not-allowed border-2 py-3 bg-primary border-primary hover:bg-primary-dark hover:border-primary-dark dark:text-[#14253d] ${letterSpacing ? letterSpacing : ""} max-[500px]:py-2.5 max-[500px]:text-xs`;

  const styles = {
    primary: base + ` ${width ? `${width}` : ""}`,
    secondary:
      base +
      ` bg-zinc-800 hover:bg-transparent hover:text-zinc-800 border-zinc-800 hover:border-zinc-800 dark:bg-slate-200 dark:text-[#0a192f] dark:border-slate-200 dark:hover:text-slate-200 dark:hover:border-slate-200 ${width ? `${width}` : ""} dark:focus:hover:text-zinc-600 dark:focus:hover:border-primary-light`,
  };

  if (onClick)
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  if (href) {
    return (
      <a className={styles[type]} href={href} rel="noreferrer" target={target}>
        <div className="flex items-center justify-center gap-2">
          {icon}
          {children}
        </div>
      </a>
    );
  }

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
