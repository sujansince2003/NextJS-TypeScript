import React from "react";
interface Props {
  params: { userid: number };
}

// by default page receive params as props so destructing it
const page = ({ params }: Props) => {
  return <div>userid is {params.userid}</div>;
};

export default page;
