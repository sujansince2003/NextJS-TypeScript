import React from "react";
interface routeProps {
  params: { photo: number; userid: number };
}
const page = ({ params }: routeProps) => {
  return (
    <div>
      showing the photo {params.photo} {params.userid}
    </div>
  );
};

export default page;
