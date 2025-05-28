import { useParams, useNavigate, useLocation } from "react-router-dom";

const sampleTopics = {
  'ניהול אירוע חומ"ס': [
    "סדר פעולות של ק' חומ\"ס",
    "הצגה למנהל הלחימה",
    'מבנה פק"ל אופציות',
    'הכרזה על אירוע חומ"ס במפקדות',
    "בלעדיות המפקדות",
    "אמצעי מיגון אישי",
    "יכולות גדודי חילוץ במילואים",
  ],
  "שגרת חירום": [
    "מעבר משגרה לחירום",
    'גיבוש תמונת מצב חומ"ס',
    'ניהול שינוע חומ"ס',
  ],
  "הערכת סיכונים": [
    'הנחות עבודה לביצוע הע"ס נצורה',
    'הע"ס נצורה לחומרים רעילים – ברירות מחדל כלליות',
    'הע"ס נצורה לחומרים רעילים – ברירות מחדל לפי תרחיש',
    "מדדי סיכון עבור נוזלים רעילים נפוצים",
    "מדדי סיכון עבור גזים רעילים נפוצים",
    'הע"ס נצורה לחומרים דליקים ונפיצים – ברירות מחדל לפי תרחיש',
  ],
  "סמכויות חוקיות": [
    "חומרים מסוכנים בחקיקה ראשית ומשנית",
    "כללים ליישום תקנות דרכי החסנה",
    'דרישות פיקוד העורף ממחזיקי חומ"ס',
  ],
  "ניהול שגרה": ['תפקידי קצין חומ"ס', "ביקורת שגרה – שלבים", "ביקורת שגרה – דגשים", "מיגון – דרישות בסיסיות"],
  'סיווג חומ"ס': [
    'קבוצות סיכון לפי או"מ',
    "שילוט",
    'חומרים בעלי פוטנציאל סיכון לאוכלוסייה לפי פקע"ר',
    "רשימת חומרים פרטניים המוגדרים כבעלי פוטנציאל סיכון לאוכלוסייה",
  ],
  "הגדרות ועזרים": ["הגדרות", "תוכנות חיוניות"],
};

function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const topics = sampleTopics[categoryId] || [];

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
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              background: "transparent",
              border: "transparent",
            }}
            onClick={() =>
              navigate("../home")
            }
          >
            <img
              style={{ width: "44px" }}
              src="/homas-notebook/assets/home-icon.svg"
              alt="home-icon"
            />
          </button>
          <h1>{categoryId}</h1>
          <img
            src="/homas-notebook/assets/back-icon.svg"
            style={{
              width: "6%",
            }}
            alt="rhombus"
          />
        </div>
        <div
          className="search-bar"
          style={{
            position: "relative",
            width: "90%",
            margin: "auto",
          }}
        ></div>
      </nav>
      <ul
        style={{
          padding: "4%",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {topics.map((topic) => (
          <li
            className="list-item"
            key={topic}
            onClick={() =>
              navigate(
                `/item/${encodeURIComponent(categoryId)}/${encodeURIComponent(
                  topic
                )}`,
                { state: { background: location } }
              )
            }
          >
            {topic}
            <div
              style={{
                color: "white",
                background: "#3cacae",
                borderRadius: "50%",
                padding: "1% 3% 0% 3%",
              }}
            >
              +
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CategoryPage;
