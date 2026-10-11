import { CategoryCardProps } from "@/interfaces";
import Image from "next/image";

function CategoryCard({
  category,
  className,
  src,
  description,
}: CategoryCardProps) {
  return (
    <div
      className={`flex items-center justify-center px-4 py-2 text-sm font-medium text-primary2 ${className}`}
    >
      <Image src={src} alt={category} className="w-6 h-6 mr-2" />
      <div className="flex items-center ">
        <h1>{category}</h1>
      </div>
      <div>{description}</div>
    </div>
  );
}

export default CategoryCard;
