import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function IntroPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleClickAnywhere = () => {
      navigate("/home");
    };
    window.addEventListener("click", handleClickAnywhere);
    return () => window.removeEventListener("click", handleClickAnywhere);
  }, [navigate]);

  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "center", flex: 1 }}>
        <img
          style={{
            width: "100%",
          }}
          src="/homas-notebook/assets/notebookBG.svg"
          alt="notebookBG"
        />
        <div style={{ padding: "2rem 2rem 1rem 2rem", fontSize: "2.4vh" }}>
          <div
            style={{
              borderBottom: "5px solid rgb(36, 158, 180)",
              borderRadius: "10px",
            }}
          ></div>
          <h1 style={{ margin: "20px", fontSize: "2.5rem", color: "#2d9294" }}>
            פנקס החומ”ס
          </h1>
          <div
            style={{
              borderBottom: "5px solid rgb(36, 158, 180)",
              borderRadius: "10px",
            }}
          ></div>
          <p>
            אינני יודע מה המתכון לתפקוד מיטבי של ק' חומ"ס, אבל בטח לא יזיק לפתוח
            פנקס נתונים תחילה.
          </p>
          <p>
            פנקס נתונים לא מחליף את הספרות המקצועית העשירה בתחום החומרים
            המסוכנים שנכתבה בפיקוד העורף.
          </p>
          <p>
            הפנקס נועד לתמצת ולהנגיש את המידע המקצועי, את הנהלים, את ההוראות
            המקצועיות, את הפק"לים ואת הסד"פים לבעלי תפקידים במערך החומ"ס בפיקוד
            העורף בכלל הרמות.
          </p>
        </div>
        <div
          onClick={() => navigate("/home")}
          style={{
            fontSize: "2rem",
            color: "#2d9294",
            animation: "blink 2s infinite",
            cursor: "pointer",
          }}
        >
          צללו פנימה
        </div>      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "1rem 0",
        }}
      >
        <div
          style={{
            borderBottom: "3px solid rgb(36, 158, 180)",
            borderRadius: "10px",
            width: "55%",
          }}
        ></div>
        <img
          src="/homas-notebook/assets/rhombus.svg"
          style={{
            width: "15%",
          }}
          alt="rhombus"
        />
        <div
          style={{
            borderBottom: "3px solid rgb(36, 158, 180)",
            borderRadius: "10px",
            width: "15%",
          }}
        ></div>
      </div>
      <style>{`
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
`}</style>
    </div>
  );
}

export default IntroPage;
