import React from "react";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  //if we disable caching this component will be dynamically rendered as nextjs think the data changes but if the caching is enable this component is statically rendered
  const users = await res.json();
  console.log(users);
  return (
    <div>
      <h1>users list</h1>
      <p>{new Date().toLocaleString()}</p>
      <ul>
        <li>hello</li>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
