import { useState } from "react";

function ChecklistTableBlock({ headers, rows }) {
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
      <table
        border="1"
        cellPadding="8"
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={i === 1 || i === 0 ? "no-border" : "table-header"} // assuming checkbox column is index 1
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
                    <td className="table-header" rowSpan={row.steps.length}>
                      {row.header}
                    </td>
                  )}

                  {/* Action cell */}

                  {/* Checkbox */}
                  <td className="no-border" style={{ textAlign: "center" }}>
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={checked[currentCheckIndex]}
                        onChange={() => toggleCheck(currentCheckIndex)}
                      />
                      <span className="checkmark" />
                    </label>
                  </td>

                  <td>{step[0]}</td>
                  {/* Info source cell */}
                  {showSource ? (
                    <td rowSpan={step[1].rowSpan}>{step[1].text}</td>
                  ) : step[1] && typeof step[1] === "string" ? (
                    <td>{step[1]}</td>
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
