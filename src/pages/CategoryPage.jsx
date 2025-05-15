import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    import(`../data/${categoryId}.json`)
      .then((module) => setTopics(module.topics))
      .catch(() => setTopics([]));
  }, [categoryId]);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{categoryId.toUpperCase()}</h1>
      {topics.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <ul>
          {topics.map((topic) => (
            <li key={topic.id}>
              <strong>{topic.title}</strong>: {topic.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
