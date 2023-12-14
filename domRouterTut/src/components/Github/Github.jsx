import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>{data.login}</h1>
      <img src={`${data.avatar_url}`} alt="" height="300px" width="300px" />
    </div>
  );
}

export default Github;
