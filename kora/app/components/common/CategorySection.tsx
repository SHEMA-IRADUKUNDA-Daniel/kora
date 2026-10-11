import Img from "next/image";
import Button from "./Button";
import { ArrowUpRightIcon } from "../Icons";
import { CategorySectionProps } from "@/interfaces";

function CategorySection({
  subTitle,
  mainTitle,
  buttonText,
  categories,
  children,
  showArrow = true,
}: CategorySectionProps) {
  const totalItems = categories.length;

  return (
    <div id="Categories" className="container mx-auto py-10">
      <div className="flex flex-col gap-4">
        <div className="text-xs font-semibold text-secondary">{subTitle}</div>
        <div className="flex justify-between items-center ">
          <h1 className="font-medium text-5xl"> {mainTitle}</h1>
          <Button
            buttonName={buttonText}
            className="border-borderCatergory border text-primary2 px-6 py-3 rounded-sm font-semibold"
          />
        </div>
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 ${
          totalItems === 3 ? "lg:grid-cols-3" : "lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {categories.map((item) => (
          <div key={item.id}>
            <Img
              width={416}
              height={290}
              src={item.src.src}
              alt={item.category}
            />
            <div className="flex justify-between items-center   mt-4 text-primary2 font-medium ">
              <h1 className="text-primar2  text-2xl">{item.category}</h1>
              {showArrow && (
                <ArrowUpRightIcon className="w-5 h-5 stroke-2 ml-2 text-secondary" />
              )}
            </div>
            {item.price && (
              <span className="text-primary2   font-semibold text-base ">
                {item.price}
              </span>
            )}
            {item.description && (
              <div className="text-sm text-primary3 mt-4">
                {item.description}
              </div>
            )}
            {item.detail1 && (
              <p className="text-xs text-primary3 mt-3 leading-relaxed font-normal">
                {item.detail1}
              </p>
            )}
            {item.detail2 && (
              <p className="text-xs text-primary3 mt-3 leading-relaxed font-normal">
                {item.detail2}
              </p>
            )}
            {item.detail3 && (
              <p className="text-xs text-primary3 mt-3 leading-relaxed font-normal">
                {item.detail3}
              </p>
            )}
            {item.detail4 && (
              <p className="text-xs text-primary3 mt-3 leading-relaxed font-normal">
                {item.detail4}
              </p>
            )}
          </div>
        ))}
        {children}
      </div>
    </div>
  );
}

export default CategorySection;
