import { useState } from "react";

function LiveSearch() {
  const names = [
    "Aarav",
    "Vivaan",
    "Aditya",
    "Arjun",
    "Rohan",
    "Rahul",
    "Priya",
    "Ananya",
    "Neha",
    "Kavya",
    "Arpit",
    "Abhay"
  ];

  const [search, setSearch] = useState("");

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Live Search Filter</h2>

      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredNames.length > 0 ? (
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
}

export default LiveSearch;
