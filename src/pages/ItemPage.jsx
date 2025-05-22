import { useParams, useNavigate } from "react-router-dom";
import ItemRenderer from "../components/ItemRenderer";
import loadData, { categoryColors } from "../data/loadData";

function ItemPage({ modal }) {
  const { categoryId, itemId } = useParams();
  const navigate = useNavigate();

  const decodedCategoryId = decodeURIComponent(categoryId);
  const decodedItemId = decodeURIComponent(itemId);

  const topicData = loadData(decodedCategoryId);
  const item = topicData[decodedItemId];
  const categoryColor = categoryColors[decodedCategoryId] || "#999";

  if (!item) {
    return <div style={{ padding: "2rem" }}>⚠️ הפריט לא נמצא.</div>;
  }

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div
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
      <div
        style={{
          background: "white",
          padding: "1rem",
          borderRadius: "25px",
          maxWidth: "900px",
          width: "90%",
          maxHeight: "90svh",
          overflowY: "auto",
          position: "relative",
          margin: "3%",
        }}
      >
        {modal && (
          <div>
            <div
              className="item-title"
              style={{backgroundColor: categoryColor }}
            >
              <button
                onClick={handleClose}
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
              </button>
              <h2 style={{ margin: 0 }}>{item.title}</h2>
            </div>
          </div>
        )}

        <ItemRenderer components={item.components} color={categoryColor} />
      </div>
    </div>
  );
}

export default ItemPage;
