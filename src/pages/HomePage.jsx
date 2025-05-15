import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "gases", name: "Gases" },
  { id: "liquids", name: "Liquids" },
  { id: "solids", name: "Solids" },
  { id: "corrosives", name: "Corrosives" },
  { id: "toxics", name: "Toxics" },
  { id: "oxidizers", name: "Oxidizers" },
  { id: "flammables", name: "Flammables" },
  { id: "reactives", name: "Reactives" },
];

export default function HomePage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Welcome to Homas Notebook</h1>
      <p>Select a category:</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            style={{
              padding: "1rem",
              background: "#eee",
              borderRadius: "0.5rem",
              textDecoration: "none",
              color: "#333",
              minWidth: "100px",
              textAlign: "center",
            }}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
