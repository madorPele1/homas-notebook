import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    "מדדי סיכון לשימוש",
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
  "ניהול שגרה": [
    'תפקידי קצין חומ"ס',
    "ביקורת שגרה – שלבים",
    "ביקורת שגרה – דגשים",
    "מיגון – דרישות בסיסיות",
  ],
  'סיווג חומ"ס': [
    'קבוצות סיכון לפי או"מ',
    "שילוט",
    'חומרים בעלי פוטנציאל סיכון לאוכלוסייה לפי פקע"ר',
    "רשימת חומרים פרטניים המוגדרים כבעלי פוטנציאל סיכון לאוכלוסייה",
  ],
  "הגדרות ועזרים": ["הגדרות", "תוכנות חיוניות"],
  "אתר שימור ידע": ["אתר שימור ידע"],
  "מחשבון דון": ["מחשבון דון"],
  "חיפוש חומר": ["חיפוש חומר"],
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const openTopic = queryParams.get("topic");
  const topics = sampleTopics[categoryId] || [];
  const scrollRef = useRef(null);


  const handleHomeClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      navigate("../home");
    }, 300); // Match the duration of exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="category-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav>
            <img
              style={{
                width: "100%",
                position: "absolute",
                top: "-5%",
                zIndex: 1,
              }}
              src="/homas-notebook/assets/notebookBG.svg"
              alt="notebookBG"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <button
                style={{
                  background: "transparent",
                  border: "transparent",
                  margin: "0 5% 0 15%",
                }}
                onClick={handleHomeClick}
              >
                <img
                  style={{ width: "44px" }}
                  src="/homas-notebook/assets/home-icon.svg"
                  alt="home-icon"
                />
              </button>
              <h1>{categoryId}</h1>
            </div>
          </nav>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            style={{
              padding: "4%",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            {topics.map((topic) => (
              <motion.li
                key={topic}
                ref={topic === openTopic ? scrollRef : null}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 20px",
                  borderRadius: "30vh",
                  backgroundColor: topic === openTopic ? "#d0f0ff" : "#f4f4f4",
                  boxShadow: topic === openTopic ? "0 0 10px rgba(0, 0, 0, 0.2)" : "0 2px 6px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  color: "rgb(34 113 114)",
                  fontWeight: "bold",
                  gap: "10%",
                  fontSize: "1rem"
                }}
                onClick={() =>
                  navigate(
                    `/item/${encodeURIComponent(categoryId)}/${encodeURIComponent(topic)}`,
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
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CategoryPage;
