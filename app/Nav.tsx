"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { status, data: session } = useSession();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || status === "loading") {
    return null; // Or return a loading indicator
  }

  return (
    <nav className="flex justify-center">
      <ul className="flex gap-8">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/product"}>Products</Link>
        </li>
        <li>
          <Link href={"/users"}>Users</Link>
        </li>
        <li>
          <Link href={"/admin"}>Admin</Link>
        </li>
        <li>
          {status === "authenticated" && (
            <>
              <div>{session.user!.name}</div>
              <Link href={"/api/auth/signout"}>signout</Link>
            </>
          )}
        </li>
        <li>
          {status === "unauthenticated" && (
            <Link href={"/api/auth/signin"}>Sign IN</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
