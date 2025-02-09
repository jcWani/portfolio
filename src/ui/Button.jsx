"use client";

export function Button({
  variant = "solid",
  size = "md",
  color = "primary",
  icon,
  className,
  fullWidth,
  children,
  href,
}) {
  // Base styles that are always applied
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 duration-300 ease-in-out focus-visible:ring-primary/80";

  // Variant styles
  const variantStyles = {
    solid: {
      primary:
        "bg-primary text-white hover:bg-primary-dark dark:text-[#0a192f] dark:focus:bg-primary-light",
      secondary:
        "bg-zinc-900 text-white hover:bg-gray-700 dark:bg-white dark:text-[#0a192f] dark:hover:bg-gray-300",
    },
  };

  // Size styles
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-6 py-3 gap-3",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "w-auto";

  if (href)
    return (
      <a
        className={`${baseStyles} ${variantStyles[variant][color]} ${sizeStyles[size]} ${widthStyles} ${className}`}
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        {icon && icon}
        <span>{children}</span>
      </a>
    );

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant][color]} ${sizeStyles[size]} ${widthStyles} ${className}`}
    >
      {icon && icon}
      <span>{children}</span>
    </button>
  );
}
