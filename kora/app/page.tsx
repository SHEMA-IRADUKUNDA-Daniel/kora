"use client";

import Button from "./components/common/Button";
import Navibar from "./components/common/Navbar";

import footwear from "../public/footwear.png";
import layersandrainwear from "../public/layersandrainwear.png";
import packsandessentials from "../public/packsandessentials.png";
import CategorySection from "./components/common/CategorySection";
import RainJacket from "../public/Mistrainjacket.png";
import HikingShoes from "../public/RidgedHikingShoes.png";
import TrekkingPoles from "../public/Trekkingpoles.png";
import HikingBackpack from "../public/Traildaypack24l.png";
import HeroFooter from "./components/common/HeroFooter";

function Home() {
  const Categories = [
    {
      id: 1,
      src: footwear,
      category: "Footwear",
      description: "Find your perfect fit for the trails.",
    },
    {
      id: 2,
      src: layersandrainwear,
      category: "Hiking Backpacks",
      description: "Carry your essentials with ease.",
    },
    {
      id: 3,
      src: packsandessentials,
      category: "Packs and Essentials",
      description: "Everything you need for your journey.",
    },
  ];
  const Explore = [
    {
      id: 1,
      src: RainJacket,
      category: "Mist rain Jacket ",
      price: "85,000 Rwf",
      detail1: "A light layer for changing skies.",
    },
    {
      id: 2,
      src: HikingShoes,
      category: "Hiking Shoes",
      price: "85,000 Rwf",
      detail2: "Steady footing. Everyday trails.",
    },
    {
      id: 3,
      src: TrekkingPoles,

      category: "Trekking Poles",
      price: "85,000 Rwf",
      detail3: "A little support on the ascent.",
    },
    {
      id: 4,
      src: HikingBackpack,
      category: "Hiking Backpacks",
      price: "85,000 Rwf",
      detail4: "Room for the whole day.",
    },
  ];

  return (
    <main className="font-display">
      <div className="bg-primary py-4 text-center text-sm font-normal text-foreground">
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
              className="bg-white cursor-pointer text-primary2 px-6 py-3 rounded-sm font-semibold"
            />
            <Button
              buttonName="Find your hiking kit"
              className=" text-white cursor-pointer  px-6 py-3 rounded-sm font-semibold  border"
            />
          </div>
          <div className="text-foreground flex justify-between">
            <div>01/ The journey starts here.</div>
            <div>Inspired by the Virunga foothills, Rwanda</div>
          </div>
        </div>
      </div>
      <HeroFooter />
      <CategorySection
        subTitle="THE EVERYDAY ADVENTURE"
        mainTitle="Good gear. More going."
        buttonText="Shop all categories"
        categories={Categories}
      />
      <CategorySection
        showArrow={false}
        subTitle="PACK A LITTLE CONFIDENCE"
        mainTitle="Explore the wild comfortably."
        buttonText="Explore the shop"
        categories={Explore}
      />
    </main>
  );
}
export default Home;
