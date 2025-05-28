import React from "react";

function TableBlock({ headers, rows, color, linkColumns = [] }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th className="table-header" style={{backgroundColor: color, borderColor: color}} key={i}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => {
              // If cell is object with spans or a link
              if (
                typeof cell === "object" &&
                cell !== null &&
                !React.isValidElement(cell)
              ) {
                const { content, colSpan, rowSpan, url } = cell;
                return (
                  <td style={{borderColor: color}}
                    key={j}
                    colSpan={colSpan || undefined}
                    rowSpan={rowSpan || undefined}
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

              // Regular primitive value
              return <td style={{borderColor: color}} key={j}>{cell}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableBlock;
