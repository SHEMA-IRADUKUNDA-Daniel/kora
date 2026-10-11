import Image from "next/image";
import NavLinks from "../NavLink";
import HeaderActionButtons from "./HeaderActionButtons";

function Navibar() {
  return (
    <nav className="bg-white border-b border-b-foreground md:px-0 sticky top-0 z-50 p-8  ">
      <div className="container  mx-auto flex justify-between items-center">
        <Image
          src="/Brand.svg"
          alt="Brand"
          width={129}
          height={39}
          className="h-8 w-auto"
          priority
        />
        <ul className=" hidden lg:flex  space-x-10">
          <NavLinks href="/" name="Home" />
          <NavLinks href="/Shop" name="Shop" />
          <NavLinks href="/HikingKits" name="Hiking Kits" />
          <NavLinks href="/Stories" name="Stories" />
          <NavLinks href="/Community" name="Community" />
          <NavLinks href="/About" name="About" />
        </ul>
        <HeaderActionButtons />
      </div>
    </nav>
  );
}

export default Navibar;
