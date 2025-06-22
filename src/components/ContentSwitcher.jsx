import { useState } from "react";
import ChecklistTableBlock from "./ChecklistTableBlock";
import TableBlock from "./TableBlock";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

function ContentSwitcher({ options, color }) {
  const optionKeys = Object.keys(options);
  const [selected, setSelected] = useState(optionKeys[0]);

  const content = options[selected];

  return (
    <div>
      <p style={{ marginBottom: "0.5rem", textAlign: "center" }}>
        בחרו את הדרג המתאים כדי להציג מידע:
      </p>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1rem",
          justifyContent: "space-around",
        }}
      >
        {optionKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className="content-switch-btn"
            style={{
              backgroundColor:
                selected === key ? "rgb(109 107 107)" : "rgb(192 192 192)",
            }}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Render the selected content */}
      <div>
        {content.components.map((block, i) => {
          switch (block.type) {
            case "checklistTable":
              return (
                <ChecklistTableBlock
                  key={i}
                  headers={block.headers}
                  rows={block.rows}
                  color={color}
                />
              );
            case "text":
              return (
                <TextBlock key={i} content={block.content} color={color} />
              );
            case "image":
              return <ImageBlock key={i} src={block.src} alt={block.alt} />;
            case "table":
              return (
                <TableBlock
                  key={i}
                  headers={block.headers}
                  rows={block.rows}
                  color={color}
                  linkColumns={block.linkColumns || []}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default ContentSwitcher;
