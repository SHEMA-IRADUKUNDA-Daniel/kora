import { ComponentType, SVGProps } from "react";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
export interface LinkProps {
  name: string;
  href: string;
  className?: string;
}
export interface ButtonProps {
  className?: string;
  buttonName?: string;
}

export interface HeroIconProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  header?: string;
  className?: string;
}
export interface CategoryCardProps {
  src: string;
  category: string;
  className?: string;
  description?: string;
}

export interface CategoryItem {
  id: number;
  src: StaticImageData;
  category: string;
  description?: string;
  price?: string;
  detail1?: string;
  detail2?: string;
  detail3?: string;
  detail4?: string;
}

export interface CategorySectionProps {
  subTitle?: string;
  mainTitle?: string;
  buttonText?: string;
  categories: CategoryItem[];
  className?: string;
  showArrow?: boolean;
  children?: ReactNode;
}
