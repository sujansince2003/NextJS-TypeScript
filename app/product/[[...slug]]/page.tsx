import React from "react";

//using [[...slug]] to make slug values optional and in product page this page can be rendered without slug values
const page = ({ params }: any) => {
  // const slugValue = params?.slug ? params.slug[0] : null;
  return <div>slug is {params.slug}</div>;
};

export default page;
