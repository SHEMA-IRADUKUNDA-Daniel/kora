import { ComponentType, SVGProps } from "react";
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
