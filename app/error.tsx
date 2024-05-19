"use client";
import React from "react";

interface errorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: errorProps) => {
  return (
    <div>
      <div>Error occured</div>
      <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default Error;
