import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const layout = ({ children }: props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-300 p-5 mr-5">Navbar</aside>
      <div>{children}</div>
    </div>
  );
};

export default layout;
