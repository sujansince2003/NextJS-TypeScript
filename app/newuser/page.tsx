"use client";
import React from "react";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>new user page</h1>
      <button className="btn btn-ghost" onClick={() => router.push("/users")}>
        create user
      </button>
    </div>
  );
};

export default Page;
