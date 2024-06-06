import Image from "next/image";
import React from "react";
import codeimg from "@/public/image/codeimg.png";

const page = () => {
  return (
    <div className="relative h-screen">
      <Image
        src={
          "https://i.postimg.cc/Gh2zbH1M/359851332-284023264284604-3046082159543838090-n.jpg"
        }
        alt="xd"
        // width={500}
        // height={500}
        fill
        className="object-cover"
        sizes="(max-width:480px) 100vw,(max-width:768px) 50vw , 33vw"
        priority
      />
      {/* <Image
        src={codeimg}
        alt="xd"
        // width={500}
        // height={500}
        className="object-cover"
      /> */}
    </div>
  );
};

export default page;
