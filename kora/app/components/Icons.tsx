import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function SearchIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://w3.org"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-6 h-6 ${props.className || ""}`}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.602 10.601Z"
      />
    </svg>
  );
}

export function ProfileIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://w3.org"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-6 h-6 ${props.className || ""}`}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://w3.org"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`w-6 h-6 stroke-[2.5] ${props.className || ""}`}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://w3.org"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="inherit"
      stroke="currentColor"
      className={`w-5 h-5 stroke-2 ${props.className || ""}`}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}
export function DeliveryCarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://w3.org"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="inherit" /* Respects your stroke-2 setup */
      stroke="currentColor"
      className={`w-6 h-6 stroke-2 ${props.className || ""}`}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM19.5 18.75a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 5.25h11.25V18H2.25V5.25Zm11.25 4.5h4.875c.621 0 1.125.504 1.125 1.125v4.875H13.5V9.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 12h5.25m-5.25 3h5.25"
      />
    </svg>
  );
}
