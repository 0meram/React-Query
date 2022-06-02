import "./App.css";
import React from "react";
import Fetcher from "./components/Fetcher.jsx";
import Poster from "./components/Poster.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className="App">
        <h1>my first react query</h1>
        <div>
        <h2>Benefits of using React-Query in react.js</h2>
        applications Some of the features that React-Query provides include:
        <ul style={{ listStyleType: 'none'}}>
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
            Handling complex application caching so that the request operation
            is optimized.
          </li>
        </ul>
      </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Fetcher />
          <Poster />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
