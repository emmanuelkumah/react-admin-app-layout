interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "outline" | "red";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  startIcon,
  endIcon,
  onClick,
  disabled,
  className = "",
}) => {
  //variant classes
  const variantClasses = {
    primary:
      "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300",
    red: "bg-red-500 text-white shadow-theme-xs hover:bg-red-600 disabled:bg-red-300",

    outline:
      "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
  };
  //size classes
  const sizeClasses = {
    xs: "px-3 py-2 text-xs",
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
    lg: "px-6 py-4 text-base",
    xl: "px-8 py-5 text-lg",
    // sm: "px-4 py-3 text-sm",
    // md: "px-5 py-3.5 text-sm",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center px-2  gap-2 justify-center rounded-lg transition ${className} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
