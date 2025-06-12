import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItemRenderer from "../components/ItemRenderer";
import loadData, { categoryColors } from "../data/loadData";

function ItemPage({ modal }) {
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // Lock scroll
    }

    return () => {
      document.body.style.overflow = ""; // Reset on unmount
    };
  }, [modal]);

  const { categoryId, itemId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const decodedCategoryId = decodeURIComponent(categoryId);
  const decodedItemId = decodeURIComponent(itemId);

  const topicData = loadData(decodedCategoryId);
  const item = topicData[decodedItemId];
  const categoryColor = categoryColors[decodedCategoryId] || "#999";

  if (!item) {
    return <div style={{ padding: "2rem" }}>⚠️ הפריט לא נמצא.</div>;
  }

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      navigate(-1);
    }, 300); // Duration must match the exit animation
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="item-modal"
          initial={modal ? { opacity: 0 } : false}
          animate={modal ? { opacity: 1 } : {}}
          exit={modal ? { opacity: 0 } : {}}
          transition={{ duration: 0.3 }}
          style={{
            position: modal ? "fixed" : "relative",
            top: modal ? "0" : "auto",
            left: modal ? "0" : "auto",
            width: modal ? "100vw" : "auto",
            height: modal ? "100svh" : "auto",
            background: modal ? "rgba(0,0,0,0.5)" : "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: modal ? 1000 : "auto",
            overflow: "auto",
          }}
        >
          <motion.div
            key="item-content"
            initial={modal ? { opacity: 0, scale: 0.95, y: 20 } : false}
            animate={modal ? { opacity: 1, scale: 1, y: 0 } : {}}
            exit={modal ? { opacity: 0, scale: 0.95, y: 20 } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              background: "white",
              padding: "0.7rem",
              borderRadius: "25px",
              maxWidth: "900px",
              width: "90%",
              maxHeight: "90svh",
              position: "relative",
              margin: "3%",
              overflowY: "auto",
            }}
          >
            {modal && (
              <motion.div
                className="item-title"
                style={{ backgroundColor: categoryColor }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.button
                  onClick={handleClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    fontSize: "1.2rem",
                    background: "transparent",
                    cursor: "pointer",
                    border: "white solid",
                    borderRadius: "100%",
                    color: "white",
                    padding: "1% 3% 2% 3%",
                  }}
                >
                  ✖
                </motion.button>
                <h2 style={{ margin: 0 }}>{item.title}</h2>
              </motion.div>
            )}

            <ItemRenderer components={item.components} color={categoryColor} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ItemPage;
