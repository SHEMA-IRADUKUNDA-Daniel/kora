import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkProps } from "../../interfaces";
function NavLinks({ className, href, name }: LinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        className={`  font-normal  font-display ${
          isActive
            ? "text-secondary font-semibold pb-8 border-b-2 hover:text-primary3 "
            : "text-primary2 hover:text-primary3 hover:font-semibold"
        } ${className}`}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
export default NavLinks;
