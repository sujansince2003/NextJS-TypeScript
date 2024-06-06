"use client";
import React, { useState } from "react";
// import Heavycomp from "../Components/Heavycomp";
// we are importing Heavycomp statically here so it is included in js bundle but we want to import or render only when user click buttons so we need to import it dynamically
import dynamic from "next/dynamic";

const Heavycomp = dynamic(
  () => import("@/app/Components/Heavycomp"),

  {
    ssr: false, //set this to false if we have some client side code to avoid render in server side
    loading: () => <p>Loading....</p>,
  }
);

const page = () => {
  const [isVisible, setIsvisible] = useState<boolean>(false);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setIsvisible((state) => !state)}
      >
        lazy load heavy comp
      </button>

      {isVisible && <Heavycomp />}
    </div>
  );
};

export default page;
