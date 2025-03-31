import React from "react";
import Button from "../Buttons/Button";
interface HorizontalCardProps {
  title: string;
  description: string;
  hasButton?: boolean;
  image: string; // URL of the image
}
const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  description,
  hasButton,
  image,
}) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white dark:bg-gray-800">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img src={image} alt="An image " />
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/2 justify-center">
          <h3 className="text-xl">{title}</h3>
          <p className="text-theme-sm">{description}</p>
          {hasButton && (
            <Button variant="primary" size="md" className="w-32">
              Button text
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
