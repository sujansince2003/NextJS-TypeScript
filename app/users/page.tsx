import React from "react";
import UserTable from "./UserTable";

interface routeProps {
  searchParams: { sortOrder: string };
}

const page = async ({ searchParams: { sortOrder } }: routeProps) => {
  console.log(sortOrder);
  return (
    <div>
      <h1>users list</h1>
      {/* <p>{new Date().toLocaleString()}</p> */}
      <UserTable sortOrder={sortOrder} />
    </div>
  );
};

export default page;
