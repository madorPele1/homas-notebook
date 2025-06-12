import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  'ניהול אירוע חומ"ס',
  "שגרת חירום",
  "הערכת סיכונים",
  "סמכויות חוקיות",
  "ניהול שגרה",
  'סיווג חומ"ס',
  "הגדרות ועזרים",
  "חיפוש חומר",
  "מחשבון דון",
  "אתר שימור ידע",
];

function HomePage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = categories.filter((cat) =>
    cat.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <nav>
        <img
          style={{
            width: "100%",
            position: "absolute",
            top: "-5%",
          }}
          src="/homas-notebook/assets/notebookBG.svg"
          alt="notebookBG"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/homas-notebook/assets/rhombus.svg"
            style={{
              width: "10%",
              background: "white",
              borderRadius: "100%",
              padding: "1%",
              marginLeft: "5%"
            }}
            alt="rhombus"
          />
          <h1>פנקס החומ"ס</h1>
        </div>
        <div
          className="search-bar"
          style={{
            position: "relative",
            width: "90%",
            margin: "auto",
          }}
        >
          <input
            type="text"
            placeholder="הקלידו כאן לחיפוש..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "1rem",
              fontFamily: "Heebo",
              borderRadius: "5px",
              borderColor: "transparent",
              boxSizing: "border-box",
            }}
          />
          <img
            src="/homas-notebook/assets/magnifying-glass.svg"
            alt="search icon"
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "20px",
              height: "20px",
            }}
          />
        </div>
      </nav>

      <div className="category-grid">
        {filtered.map((cat, index) => (
          <div
            key={cat}
            className="category-item"
            onClick={() => navigate(`/category/${encodeURIComponent(cat)}`)}
          >
            <img
              src={`/homas-notebook/assets/category-items/${index + 1}.svg`}
              alt={`icon for ${cat}`}
              style={{ width: "60px", marginBottom: "0.5rem" }}
            />
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
