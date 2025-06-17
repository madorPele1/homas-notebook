import React from "react";

function TableBlock({ headers = [], rows, color, linkColumns = [], columnWidths = [] }) {
  const columnCount = headers.length || (rows[0]?.length || 0);
  const useFixedLayout = columnWidths.length > 0;

  return (
    <table
      border="1"
      cellPadding="8"
      style={{
        tableLayout: useFixedLayout ? "fixed" : "auto",
        width: "100%",
      }}
    >
      {useFixedLayout && (
        <colgroup>
          {Array.from({ length: columnCount }).map((_, i) => (
            <col
              key={i}
              style={{
                width: columnWidths[i] || "auto",
              }}
            />
          ))}
        </colgroup>
      )}

      {headers.length > 0 && (
        <thead>
          <tr>
            {headers.map((h, i) => {
              const isEmpty = !h || h.trim() === "";
              return (
                <th
                  className="table-header"
                  key={i}
                  style={{
                    backgroundColor: isEmpty ? "transparent" : color,
                    borderColor: isEmpty ? "transparent" : color,
                  }}
                >
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>
      )}

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => {
              const baseStyle = {
                borderColor: color,
              };

              if (
                typeof cell === "object" &&
                cell !== null &&
                !React.isValidElement(cell)
              ) {
                const { content, colSpan, rowSpan, url, highlight } = cell;
                return (
                  <td
                    key={j}
                    colSpan={colSpan}
                    rowSpan={rowSpan}
                    style={{
                      ...baseStyle,
                      backgroundColor: highlight ? color : undefined,
                      color: highlight ? "white" : undefined,
                    }}
                  >
                    {linkColumns.includes(j) && url ? (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </td>
                );
              }

              return (
                <td key={j} style={baseStyle}>
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableBlock;
