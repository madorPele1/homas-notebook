import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import TableBlock from "./TableBlock";
import ChecklistTableBlock from "./ChecklistTableBlock";
import ContentSwitcher from "./ContentSwitcher";
import SelectTable from "./SelectTable";

function ItemRenderer({ components, color }) {
  return components.map((block, i) => {
    switch (block.type) {
      case "text":
        return <TextBlock key={i} content={block.content} color={color} />;
      case "image":
        return <ImageBlock key={i} src={block.src} alt={block.alt} />;
      case "table":
        return <TableBlock key={i} headers={block.headers} rows={block.rows} linkColumns={block.linkColumns} color={color} />;
      case "checklistTable":
        return <ChecklistTableBlock key={i} headers={block.headers} rows={block.rows} color={color} />;
      case "contentSwitch":
        return <ContentSwitcher key={i} options={block.options} color={color} />;
      case "selectTable":
        return <SelectTable key={i} title={block.title} columnTitles={block.columnTitles} placeholder={block.placeholder} options={block.options} color={color} />;
      default:
        return null;
    }
  });
}

export default ItemRenderer;
