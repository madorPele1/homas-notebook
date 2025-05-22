import { useNavigate } from "react-router-dom";

function IntroPage() {
  const navigate = useNavigate();
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
        <div style={{ padding: "2rem" }}>
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
        <button onClick={() => navigate("/home")}>צללו פנימה</button>
      </div>

      {/* Footer */}
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
    </div>
  );
}

export default IntroPage;
