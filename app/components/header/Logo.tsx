import {Link} from "@remix-run/react";

function Logo() {
  return (
    <Link
      to="/"
      className="flex h-9 gap-2  items-center"
    >
      <img
        src="/logo.svg"
        alt="Logo app"
        className="object-cover h-full"
      />
      <span className="font-bold">Redrama</span>
    </Link>
  );
}

export default Logo;
