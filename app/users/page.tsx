import React from "react";
import UserTable from "./UserTable";

const page = async () => {
  return (
    <div>
      <h1>users list</h1>
      {/* <p>{new Date().toLocaleString()}</p> */}
      <UserTable />
    </div>
  );
};

export default page;
