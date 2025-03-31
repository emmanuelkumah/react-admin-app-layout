interface AlertProps {
  variant: "success" | "error" | "warning" | "info"; // Alert type

  title: string;
  message: string;
  icon?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ variant, title, message, icon }) => {
  //variant classes
  const variantClasses = {
    info: {
      container: "bg-blue-50 border-blue-500/30 dark:bg-red-500/15",
      icon: "text-blue-light-500",
    },
    success: {
      container:
        "border-green-500 bg-green-50 dark:border-green-500/30 dark:bg-green-500/15",
      icon: "text-green-500",
    },
    warning: {
      container:
        "border-yellow-500 bg-yellow-50 dark:border-yellow-500/30 dark:bg-yellow-500/15",
      icon: "text-yellow-500",
    },
    error: {
      container:
        "border-red-500 bg-red-50 dark:border-red-500/30 dark:bg-red-500/15",
      icon: "text-red-500",
    },
  };
  return (
    <div
      className={`rounded-xl border p-4 ${variantClasses[variant].container} `}
    >
      <div className="flex items-center gap-2">
        <div>
          <p className={`${variantClasses[variant].icon}`}>{icon}</p>
        </div>
        <div>
          <h4 className="text-lg">{title}</h4>
          <p className="font-light">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
