import { useState } from "react";

function ChecklistTableBlock({ headers, rows, color }) {
  const totalSteps = rows.reduce((acc, row) => acc + row.steps.length, 0);
  const [checked, setChecked] = useState(Array(totalSteps).fill(false));

  let checkIndex = 0;

  const toggleCheck = (index) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  return (
    <div>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                className="table-header"
                key={i}
                style={{
                  position: "sticky",
                  borderColor: h ? color : "transparent",
                  backgroundColor: h ? color : "transparent",
                  color: h ? "white" : "inherit",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) =>
            row.steps.map((step, stepIndex) => {
              const isFirst = stepIndex === 0;
              const showSource =
                step[1] && typeof step[1] === "object" && step[1].rowSpan;

              const rowKey = `${rowIndex}-${stepIndex}`;
              const currentCheckIndex = checkIndex++;

              return (
                <tr key={rowKey}>
                  {/* Row header cell */}
                  {isFirst && (
                    <td
                      className="table-header"
                      rowSpan={row.steps.length}
                      style={{
                        backgroundColor: row.header ? color : "transparent",
                        borderColor: row.header ? color : "transparent",
                        color: row.header ? "white" : "inherit",
                      }}
                    >
                      {row.header}
                    </td>
                  )}

                  {/* Checkbox cell */}
                  <td className="no-border">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={checked[currentCheckIndex]}
                        onChange={() => toggleCheck(currentCheckIndex)}
                      />
                      <span
                        className="checkmark"
                        style={{ borderColor: color }}
                      />
                    </label>
                  </td>

                  {/* Action step text */}
                  <td style={{ borderColor: color }}>
                    {step[0] ?? ""}
                  </td>

                  {/* Info source cell */}
                  {showSource ? (
                    <td
                      style={{ borderColor: color }}
                      rowSpan={step[1].rowSpan}
                    >
                      {step[1].text}
                    </td>
                  ) : step[1] && typeof step[1] === "string" ? (
                    <td style={{ borderColor: color }}>{step[1]}</td>
                  ) : step[1] === null ? null : (
                    <td />
                  )}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ChecklistTableBlock;
