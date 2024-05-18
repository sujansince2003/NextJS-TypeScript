import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="flex justify-center">
      <ul className="flex gap-8  ">
        <li>
          <Link href={"/"}> Home</Link>
        </li>
        <li>
          <Link href={"/product"}> Products</Link>
        </li>
        <li>
          <Link href={"/users"}> Users</Link>
        </li>
        <li>
          <Link href={"/admin"}> Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
