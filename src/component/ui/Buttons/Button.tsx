interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger" | "success" | "outline";
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
    secondary: "bg-gray-400",
    danger: "bg-red-400",
    success: "bg-green-400",
    outline:
      "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
  };
  //size classes
  const sizeClasses = {
    sm: "px-4 py-1",
    md: "px-6 py-2",
    lg: "px-8 py-3",
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center  gap-2 justify-center rounded-lg transition ${className} ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      {children}
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};

export default Button;
