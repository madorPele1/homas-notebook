import { useState } from "react";

function ChecklistTableBlock({ headers, rows, color }) {
  // Flatten all steps to one list for checkboxes
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
                style={{ borderColor: color, backgroundColor: color }}
                key={i}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => {
            return row.steps.map((step, stepIndex) => {
              const isFirst = stepIndex === 0;
              const showSource =
                step[1] && typeof step[1] === "object" && step[1].rowSpan;

              const rowKey = `${rowIndex}-${stepIndex}`;
              const currentCheckIndex = checkIndex++;

              return (
                <tr key={rowKey}>
                  {/* Row header (merged only on first step) */}
                  {isFirst && (
                    <td
                      style={{ backgroundColor: color, borderColor: color }}
                      className="table-header"
                      rowSpan={row.steps.length}
                    >
                      {row.header}
                    </td>
                  )}

                  {/* Action cell */}

                  {/* Checkbox */}
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

                  <td style={{ borderColor: color }}>{step[0]}</td>
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
            });
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ChecklistTableBlock;
