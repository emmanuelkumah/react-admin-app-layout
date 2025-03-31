import Button from "../Buttons/Button";

interface CardComponentProps {
  caption?: string;
  description: string;
  image?: string;
  hasButton?: boolean;
  hasLink?: boolean;
  className?: string;
}
const CardComponent: React.FC<CardComponentProps> = ({
  caption,
  description,
  image,
  hasLink,
  className,
}) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex flex-col">
        <img src={image} alt={caption} className={`${className}`} />
        <h3 className="my-2 text-2xl">{caption}</h3>
        <p className="py-2">{description}</p>
        {hasLink ? (
          <a href="#" className="text-blue-500 underline ">
            Link text
          </a>
        ) : (
          <Button variant="primary" size="md" className={`w-32 ${className}`}>
            Button text
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
