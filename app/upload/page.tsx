"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface cloudniaryResult {
  pubic_id: string;
}

const page = () => {
  const [imgid, setImgid] = useState<string>("");
  return (
    <div>
      {imgid.length !== 0 && (
        <>
          <CldImage src={imgid} width={200} height={200} alt="ff" />
        </>
      )}
      <CldUploadWidget
        onSuccess={(result, widget) => {
          if (result.event !== "success") {
            return;
          }
          const info = result?.info;
          if (info && typeof info === "object") {
            const publicId = info.public_id;
            if (typeof publicId === "string") {
              setImgid(publicId);
            }
          }
        }}
        uploadPreset="xhbfwmap"
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default page;
