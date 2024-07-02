import "./App.css";
import React, { useEffect, useState } from "react";
import { getuser } from "./data.js";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getuser().then((user) => setData(user));
  }, []);
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <div>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button>Search</button>
      </div>
      <div>
        {data ? (
          data
            ?.filter((e) => {
              return search.toLowerCase() === ""
                ? e
                : e.title.toLowerCase().includes(search);
               // : e.id.toString().includes(search);
            })
            .map((e) => (
              <p key={e.id}>
                <p>{e.id}</p>
                <p>{e.body}</p>
              </p>
            ))
        ) : (
          <p>Fetching Data...</p>
        )}
      </div>
    </div>
  );
}

export default App;
