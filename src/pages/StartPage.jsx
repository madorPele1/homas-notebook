import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();
  return (
    <div>
      <img
        style={{
          width: "100%",
        }}
        src="/homas-notebook/assets/notebookBG.svg"
        alt="notebookBG"
      />
      <div
        style={{
          textAlign: "center",
          margin: "0",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
        }}
      >
        <div>
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
        </div>

        <h2 style={{ fontWeight: "200", color: "#2d9294" }}>מאי 2025</h2>
        <button onClick={() => navigate("/intro")}>לחצו לכניסה</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          bottom: "2%",
        }}
      >
        <div
          style={{
            borderBottom: "3px solid rgb(36, 158, 180)",
            borderRadius: "10px",
            width: "35%",
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
            width: "35%",
          }}
        ></div>
      </div>
    </div>
  );
}
export default StartPage;
