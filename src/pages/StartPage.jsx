import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function StartPage() {
  const navigate = useNavigate();
  const [flipping, setFlipping] = useState(false);

  const handleClickAnywhere = () => {
    if (!flipping) {
      setFlipping(true);
      setTimeout(() => {
        navigate("/intro");
      }, 900); // Match the animation duration
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickAnywhere);
    return () => window.removeEventListener("click", handleClickAnywhere);
  });

  return (
    <div>
      <img
        style={{ width: "100%" }}
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

        <div
          style={{
            fontSize: "1.5rem",
            color: "#2d9294",
            animation: "blink 2s infinite",
            cursor: "pointer",
          }}
        >
          לחצו לכניסה
        </div>
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
          style={{ width: "15%" }}
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

      <AnimatePresence>
        {flipping && (
          <motion.div
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{
              rotateX: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: [0.17, 0.67, 0.83, 0.67],
              },
            }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              transformOrigin: "bottom center",
              zIndex: 999,
              backfaceVisibility: "hidden",
              borderTop: "1px solid #ccc",
              boxShadow: "0 -5px 30px rgba(0,0,0,0.2)",
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}

export default StartPage;
