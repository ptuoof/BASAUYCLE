export default function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  ...props
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition";

  const variants = {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100"
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
