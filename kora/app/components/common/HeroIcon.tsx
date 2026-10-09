import { HeroIconProps } from ".../../../interfaces";

function HeroIcon({ Icon, header, text, className }: HeroIconProps) {
  return (
    <div className={`flex items-center font-display  gap-2 ${className || ""}`}>
      <Icon />
      <div className="flex flex-col  gap-1  text-sm font-medium">
        <span className="text-sm font-semibold text-primary2">{header}</span>
        <span className="text-xs text-primary3 ">{text}</span>
      </div>
    </div>
  );
}

export default HeroIcon;
