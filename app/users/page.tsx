import React, { Suspense } from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface routeProps {
  searchParams: { sortOrder: string };
}

const page = async ({ searchParams: { sortOrder } }: routeProps) => {
  console.log(sortOrder);
  return (
    <div>
      <h1>users list</h1>
      {/* <p>{new Date().toLocaleString()}</p> */}
      <Link href={"/newuser"} className="bg-violet-300 px-5 py-3 rounded-xl  ">
        New User
      </Link>
      <Suspense fallback={<p>Loading.....</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </div>
  );
};

export default page;
