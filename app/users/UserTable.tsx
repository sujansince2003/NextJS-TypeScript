import Link from "next/link";
import React from "react";
import { sort } from "fast-sort";

interface UsertableProps {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: UsertableProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  //if we disable caching this component will be dynamically rendered as nextjs think the data changes but if the caching is enable this component is statically rendered
  const users = await res.json();

  const sortedData = sort(users).asc(
    sortOrder === "email" ? (user: any) => user.email : (user: any) => user.name
  );
  return (
    <table className="table table-bordered ">
      <thead>
        <tr>
          <th>
            <Link href={"/users?sortOrder=name"}> Name</Link>
          </th>
          <Link href={"/users?sortOrder=email"}> Email</Link>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((user: any) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
