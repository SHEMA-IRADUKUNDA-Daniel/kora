import { SearchIcon, ProfileIcon, BagIcon } from "../Icons";

function HeaderActionButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="text-primary2 hover:text-primary transition">
        <SearchIcon className="w-5 h-5" />
      </button>

      <button className="text-primary2 hover:text-primary transition">
        <ProfileIcon className="w-5 h-5" />
      </button>

      <button className="flex text-primary2 hover:text-primary transition ">
        <BagIcon className="w-5 h-5" />

        <div className=" text-primary text-xs font-bold px-2 py-0.5 rounded-full">
          Bag(3)
        </div>
      </button>
    </div>
  );
}
export default HeaderActionButtons;
