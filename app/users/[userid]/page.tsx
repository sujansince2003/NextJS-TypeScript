import React from "react";
interface Props {
  params: { userid: number };
  searchParams: { sortOrder: string };
}

// by default page receive params as props so destructing it
const page = ({ params, searchParams }: Props) => {
  return (
    <div>
      userid is {params.userid} {searchParams.sortOrder}
    </div>
  );
};

export default page;
