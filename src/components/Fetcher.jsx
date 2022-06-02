import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

async function fetchPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("🚀 ~ data", data);
  return data;
}

const Fetcher = () => {
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <div style={{ textAlign: "left", width: "700px", marginLeft: "100px" }}>
      <h1>
        Posts using{" "}
        <span style={{ color: "red" }}>useQuery('posts', fetchPosts)</span>
      </h1>
      {data.map((post, index) => {
        return (
          <div style={{ margin: "8px" }} key={index}>
            <span style={{ marginRight: "10px" }}>{post.id}...</span>
            {post.title}
          </div>
        );
      })}
    </div>
  );
};

export default Fetcher;
