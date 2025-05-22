import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import TableBlock from "./TableBlock";
import ChecklistTableBlock from "./ChecklistTableBlock";
import ContentSwitcher from "./ContentSwitcher";

function ItemRenderer({ components, color }) {
  // You can later pass `color` to specific blocks as needed
  return components.map((block, i) => {
    switch (block.type) {
      case "text":
        return <TextBlock key={i} content={block.content} color={color} />;
      case "image":
        return <ImageBlock key={i} src={block.src} alt={block.alt} />;
      case "table":
        return <TableBlock key={i} headers={block.headers} rows={block.rows} color={color} />;
      case "checklistTable":
        return <ChecklistTableBlock key={i} headers={block.headers} rows={block.rows} color={color} />;
      case "contentSwitch":
        return <ContentSwitcher key={i} options={block.options} color={color}/>;
      default:
        return null;
    }
  });
}


export default ItemRenderer;
