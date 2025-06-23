import { useState } from "react";

function PasswordGate({ onUnlock }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "1234") {
      onUnlock();
    } else {
      setError("סיסמה שגויה, נסה שוב");
    }
  };

  return (
    <div
      style={{
        height: "100svh",
        background: "linear-gradient(#249eb4, rgb(255, 255, 255))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Heebo, sans-serif",
        direction: "rtl",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "2rem",
          margin: "1rem",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem", color: "#249eb4" }}>כניסה לפנקס</h2>

        <input
          type="password"
          placeholder="הכניסו סיסמה"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "0.75rem",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            marginBottom: "1rem",
            outlineColor: "#249eb4",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#249eb4",
            color: "white",
            padding: "0.75rem 1.5rem",
            border: "none",
            borderRadius: "10px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1b8da2")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#249eb4")}
        >
          כניסה
        </button>

        {error && (
          <p style={{ color: "#d11a2a", marginTop: "1rem", fontWeight: "bold" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
}

export default PasswordGate;
