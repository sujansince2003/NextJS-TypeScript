import { notFound } from "next/navigation";
import React from "react";
interface Props {
  params: { userid: number };
  searchParams: { sortOrder: string };
}

// by default page receive params as props so destructing it
const page = ({ params, searchParams }: Props) => {
  // want to show not found page is id is greate than 10
  if (params.userid > 10) notFound();
  return (
    <div>
      userid is {params.userid} {searchParams.sortOrder}
    </div>
  );
};

export default page;
