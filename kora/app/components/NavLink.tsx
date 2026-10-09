import Link from "next/link";
import { LinkProps } from "../../interfaces";
function NavLinks({ className, href, name }: LinkProps) {
  return (
    <li>
      <Link
        className={`text-primary2 text-l font-medium  font-display ${className}`}
        href={href}
      >
        {name}
      </Link>
    </li>
  );
}
export default NavLinks;
