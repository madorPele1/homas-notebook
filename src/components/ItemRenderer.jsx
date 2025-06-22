import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import TableBlock from "./TableBlock";
import ChecklistTableBlock from "./ChecklistTableBlock";
import ContentSwitcher from "./ContentSwitcher";
import SelectTable from "./SelectTable";
import CollapsibleSections from "./CollapsibleSections";
import CalculatorBlock from "./CalculatorBlock";
import MaterialFilter from "./MaterialFilter";
import FilterDecoder from "./FilterDecoder";

function ItemRenderer({ components, color }) {
  return components.map((block, i) => {
    switch (block.type) {
      case "text":
        return <TextBlock key={i} content={block.content} color={color} />;
      case "image":
        return <ImageBlock key={i} src={block.src} alt={block.alt} width={block.width}/>;
      case "table":
        return (
          <TableBlock
            key={i}
            headers={block.headers}
            rows={block.rows}
            linkColumns={block.linkColumns}
            columnWidths={block.columnWidths}
            color={color}
          />
        );
      case "checklistTable":
        return (
          <ChecklistTableBlock
            key={i}
            headers={block.headers}
            rows={block.rows}
            color={color}
          />
        );
      case "contentSwitch":
        return (
          <ContentSwitcher key={i} options={block.options} color={color} />
        );
      case "selectTable":
        return (
          <SelectTable
            key={i}
            title={block.title}
            columnTitles={block.columnTitles}
            placeholder={block.placeholder}
            options={block.options}
            color={color}
          />
        );
      case "collapsibleSections":
        return (
          <CollapsibleSections
            key={block.id || i}
            sections={block.sections}
            color={color}
          />
        );

      case "calculator":
        return (
          <CalculatorBlock
            key={i}
            UVCEData={block.UVCEData}
            BLEVEData={block.BLEVEData}
            color={color}
          />
        );

      case "materialFilter":
        return (
          <MaterialFilter
            key={i}
            components={components.slice(i + 1)}
            color={color}
          />
        );
      case "filterDecoder":
        return (
          <FilterDecoder
            key={i}
            filterInfo={block.filterInfo}
            concentrationInfo={block.concentrationInfo}
          />
        );
      default:
        return null;
    }
  });
}

export default ItemRenderer;
