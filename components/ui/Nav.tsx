"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {routes.map((route, index) => {
        return (
          <Link
            key={index}
            href={route.path}
            className={`${route.path === pathName && "header-name-dot-color border-b-2"} nav-item capitalize font-medium`}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
