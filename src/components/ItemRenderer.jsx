import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import TableBlock from "./TableBlock";

function ItemRenderer({ components }) {
  return components.map((block, i) => {
    switch (block.type) {
      case "text":
        return <TextBlock key={i} content={block.content} />;
      case "image":
        return <ImageBlock key={i} src={block.src} alt={block.alt} />;
      case "table":
        return <TableBlock key={i} headers={block.headers} rows={block.rows} />;
      default:
        return null;
    }
  });
}

export default ItemRenderer;
