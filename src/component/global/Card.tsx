interface CardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`rounded-2xl bg-white border border-gray bg-gray p-4 shadow-theme-xs ${className}`}
    >
      <div>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
      <div className="p-4 border-t border-gray-100 sm:p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};
export default Card;
