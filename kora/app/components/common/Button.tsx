import { ButtonProps } from "@/interfaces";
import { ArrowUpRightIcon } from "../Icons";
function Button({ buttonName, className }: ButtonProps) {
  return (
    <div
      className={` flex gap-4 cursor-pointer rounded-sm transition ${className}`}
    >
      <div>{buttonName}</div>
      <ArrowUpRightIcon />
    </div>
  );
}

export default Button;
