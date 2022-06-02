import "./App.css";
import React from "react";
import Fetcher from "./components/Fetcher.jsx";
import Poster from "./components/Poster.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>my first react query</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Fetcher />
          <Poster />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
