import Image from "next/image";
import NavLinks from "../NavLink";
import HeaderActionButtons from "./HeaderActionButtons";

function Navibar() {
  return (
    <nav className="foreground p-8 ">
      <div className="container  mx-auto flex justify-between items-center">
        <Image
          src="/Brand.svg"
          alt="Brand"
          width={129}
          height={39}
          className="h-8 w-auto"
        />
        <ul className="flex space-x-10">
          <NavLinks className=" hover:text-primary" href="/" name="Home" />
          <NavLinks className=" hover:text-primary" href="/Shop" name="Shop" />
          <NavLinks
            className=" hover:text-primary"
            href="/HikingKits"
            name="Hiking Kits"
          />
          <NavLinks
            className=" hover:text-primary"
            href="/Stories"
            name="Stories"
          />
          <NavLinks
            className=" hover:text-primary"
            href="/Community"
            name="Community"
          />
          <NavLinks
            className=" hover:text-primary"
            href="/About"
            name="About"
          />
        </ul>
        <HeaderActionButtons />
      </div>
    </nav>
  );
}

export default Navibar;
