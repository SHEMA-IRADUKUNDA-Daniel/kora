"use client";

import Button from "./components/common/Button";
import HeroIcon from "./components/common/HeroIcon";
import Navibar from "./components/common/Navbar";
import { DeliveryCarIcon } from "./components/Icons";

function Home() {
  const features = [
    {
      id: 1,
      icon: DeliveryCarIcon,
      header: "Delivery, made simple.",
      text: "Kigali delivery from 3,000 RWF.",
    },
    {
      id: 2,
      icon: DeliveryCarIcon,
      header: "Find, your fit.",
      text: "Clear sizing, helpful advice.",
    },
    {
      id: 3,
      icon: DeliveryCarIcon,
      header: "7-days return window.",
      text: "Unused gear, orginal packing.",
    },
    {
      id: 4,
      icon: DeliveryCarIcon,
      header: "Rwanda in mind",
      text: "Gear for the trails around us.",
    },
  ];
  return (
    <main className="font-display">
      <div className="bg-primary py-4 text-center text-sm font-medium text-foreground">
        From Rwanda, for the journey. • Kigali delivery from 3,000 RWF
      </div>
      <Navibar />
      <div className="relative bg-[url('/Volcanolandscape.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-linear-to-r from-primary/90 via-primary/50 to-transparent pointer-events-none" />

        <div className="relative z-10 container  mx-auto pt-20 flex flex-col justify-between gap-10 py-10 ">
          <div className="font-semibold text-xs text-foreground ">
            Rooted in Rwanda. Ready for the trail.
          </div>
          <div className="font-medium text-7xl text-white max-w-xl  ">
            Go outside. Go a little further.
          </div>
          <div className=" text-foreground max-w-120 text-lg ">
            Thoughtful hiking gear, stories from the hills, and good people to
            share the journey with.
          </div>
          <div className="flex items-center content-center align-center gap-4">
            <Button
              buttonName="Shop your gear"
              className="bg-white text-primary2 px-6 py-3 rounded-sm font-semibold"
            />
            <Button
              buttonName="Find your hiking kit"
              className=" text-white  px-6 py-3 rounded-sm font-semibold  border"
            />
          </div>
          <div className="text-foreground flex justify-between">
            <div>01/ The journey starts here.</div>
            <div>Inspired by the Virunga foothills, Rwanda</div>
          </div>
        </div>
      </div>
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
    </main>
  );
}
export default Home;
