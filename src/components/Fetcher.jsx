import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";

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
    <div style={{ textAlign: "left", width: "600px", marginLeft: "100px" }}>
      <ReactQueryDevtools />
      <div>
        <h2>Benefits of using React-Query in react.js</h2>
        applications Some of the features that React-Query provides include:
        <ul>
          <li>
            Using window focus pre-fetching mechanism to pre-fetch the data
            depending on application tab activity.
          </li>
          <li>
            We can set the number of request retries for any request, in case of
            random errors.
          </li>
          <li>
            React-Query performs pre-fetching so that the application can update
            stale data in the background.
          </li>
          <li>
            {" "}
            Handling complex application caching so that the request operation
            is optimized.
          </li>
        </ul>
      </div>
      <h1>Posts using <span style={{color: 'red'}}>useQuery('posts', fetchPosts)</span></h1>
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
