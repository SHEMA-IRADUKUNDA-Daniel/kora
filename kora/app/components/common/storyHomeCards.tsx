import Image from "next/image";
import Link from "next/link";

import Image1 from "@/public/story1.png";
import Image2 from "@/public/story2.png";
import Image3 from "@/public/story3.png";
import { ArrowUpRightIcon } from "../Icons";
import Button from "./Button";

function StoryHomeCards() {
  const cards = [
    {
      id: 1,
      image: Image1,
      eyeBrow: "Trail guide · 8 min read",
      storyTile: "Before the climb: a first-timer’s guide to Bisoke",
      storyLink: "#",
    },
    {
      id: 2,
      image: Image2,
      eyeBrow: "Field notes · 5 min read",
      storyTile: "What the rain taught me in Nyungwe",
      storyLink: "#",
    },
    {
      id: 3,
      image: Image3,
      eyeBrow: "Community · 4 min read",
      storyTile: "The best part of a hike?  The people.",
      storyLink: "#",
    },
  ];

  return (
    <div className="container mx-auto py-10  px-2 md:px-0">
      <div className="flex flex-col gap-5">
        <div className="text-xs font-semibold text-secondary">
          Field notes, not just destinations
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div className="text-3xl sm:text-5xl font-medium text-primary2">
            Stories from the hills.
          </div>
          <Button
            buttonName="All stories"
            className="border border-borderCatergory/20 text-sm font-semibold p-3 items-center w-fit"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {cards.map((card) => (
            <div key={card.id} className="flex flex-col gap-3 group">
              <div className="relative w-full rounded-lg h-52 sm:h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.storyTile}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="py-2 flex flex-col gap-2">
                <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                  {card.eyeBrow}
                </span>
                <h3 className="text-primary2 text-xl font-bold leading-snug">
                  {card.storyTile}
                </h3>
                <Link
                  href={card.storyLink}
                  className="flex gap-2 items-center text-sm font-semibold text-secondary hover:underline mt-1"
                >
                  <div>Read story</div>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoryHomeCards;
