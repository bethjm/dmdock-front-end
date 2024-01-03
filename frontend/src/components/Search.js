import React, { useEffect, useState } from "react";
import "./Monsters.css";

function Search() {
  useEffect(() => {
    fetch("https://api.open5e.com/monsters/?limit=2500")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results, "data for search bar");
        // setData(data.results);
        setFilterData(data.results);
      })
      .catch((err) =>
        console.log(err, "things not working in the search barfetch request")
      );
  }, []);

  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const handleFilter = (value) => {
    const res = filterData.filter((f) => f.name.toLowerCase().includes(value));
    setData(res);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="search monsters here"
        onChange={(e) => handleFilter(e.target.value)}
      />

      <div className="search-result">
        {data.map((d, i) => {
          return (
            <div key={i}>
              {d.name}
              <h1>uh help</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
