import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import searchIndex from "../data/topics/searchIndex.json";

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
  const location = useLocation();
  const navigate = useNavigate();

  const searchResults =
    search.length > 1
      ? searchIndex.filter((item) =>
        item.text.toLowerCase().includes(search.toLowerCase())
      )
      : [];

  const filteredCategories = categories.filter((cat) =>
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
              marginLeft: "5%",
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

      {search.length > 1 ? (
        <div
          style={{
            margin: "auto 5%", padding: "1rem", width: "80",
            background: "rgb(243, 243, 243)",
            borderRadius: "10px", maxHeight: "50vh", overflowY: "auto", color: "grey", fontSize: "0.8rem",
            position: "relative",
            bottom: "2vh"
          }}
        >
          {searchResults.length === 0 ? (
            <p style={{ textAlign: "center" }}>לא נמצאו תוצאות</p>
          ) : (
            searchResults.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: "0.5rem",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate(
                    `/item/${encodeURIComponent(item.category)}/${encodeURIComponent(item.topic)}`,
                    {
                      state: { background: location } 
                    }
                  )
                }
              >
                <div style={{ fontWeight: "bold" }}>{item.text}</div>
                <div style={{ fontSize: "0.6rem", color: "#555" }}>
                  {item.category}
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="category-grid">
          {filteredCategories.map((cat, index) => (
            <div
              key={cat}
              className="category-item"
              onClick={() => {
                navigate(`/category/${encodeURIComponent(cat)}`);
              }}
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
      )}
    </div>
  );
}

export default HomePage;
