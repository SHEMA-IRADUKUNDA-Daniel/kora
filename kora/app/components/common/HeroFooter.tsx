import {
  DeliveryCarIcon,
  LocationIcon,
  MeasureIcon,
  ReturnIcon,
} from "../Icons";
import HeroIcon from "./HeroIcon";
function HeroFooter() {
  const features = [
    {
      id: 1,
      icon: DeliveryCarIcon,
      header: "Delivery, made simple.",
      text: "Kigali delivery from 3,000 RWF.",
    },
    {
      id: 2,
      icon: MeasureIcon,
      header: "Find, your fit.",
      text: "Clear sizing, helpful advice.",
    },
    {
      id: 3,
      icon: ReturnIcon,
      header: "7-days return window.",
      text: "Unused gear, orginal packing.",
    },
    {
      id: 4,
      icon: LocationIcon,
      header: "Rwanda in mind",
      text: "Gear for the trails around us.",
    },
  ];
  return (
    <div className="bg-heroFooter  ">
      <div className="flex justify-between items-center mx-auto   container py-8  md:px-0">
        {features.map((item) => (
          <HeroIcon
            key={item.id}
            Icon={item.icon}
            header={item.header}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
export default HeroFooter;
