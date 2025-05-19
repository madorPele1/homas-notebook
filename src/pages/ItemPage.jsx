import { useParams } from "react-router-dom";
import ItemRenderer from "../components/ItemRenderer";
import loadData from "../data/loadData"; // utility that dynamically loads category data

function ItemPage() {
  const { categoryId, itemId } = useParams();
  const decodedCategoryId = decodeURIComponent(categoryId);
  const decodedItemId = decodeURIComponent(itemId);

  const topicData = loadData(decodedCategoryId); // returns the whole category JSON
  const item = topicData[decodedItemId]; // grab one topic from the category

  if (!item) {
    return <div style={{ padding: "2rem" }}>⚠️ הפריט לא נמצא.</div>;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "5%",
        left: "5%",
        right: "5%",
        bottom: "5%",
        backgroundColor: "white",
        border: "2px solid #000",
        padding: "1rem",
        overflow: "auto",
      }}
    >
      <h2>{item.title}</h2>
      <ItemRenderer components={item.components} />
    </div>
  );
}

export default ItemPage;
