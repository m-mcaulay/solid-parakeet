import { ReactNode } from "react";
import MediaBanner from "../atoms/MediaBanner";

interface CardProps {
  children: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}

const Card = ({ children, imageSrc, imageAlt = "" }: CardProps) => {
  return (
    <div className="bg-white border border-border-card rounded-xl shadow-card w-[482px] max-w-md overflow-hidden">
      {imageSrc && <MediaBanner src={imageSrc} alt={imageAlt} />}
      {children}
    </div>
  );
};

export default Card;
