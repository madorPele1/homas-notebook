import { useState } from "react";

function CalculatorBlock({ UVCEData, BLEVEData, color }) {
  const [calcType, setCalcType] = useState("UVCE");
  const [unInput, setUnInput] = useState("");
  const [quantity, setQuantity] = useState("");
  const [result, setResult] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const currentData = calcType === "UVCE" ? UVCEData : BLEVEData;

  const handleUNChange = (e) => {
    const value = e.target.value;
    setUnInput(value);
    setResult(null);
    setSelectedMaterial(null);

    const match = currentData.find(
      (item) => item.UN.toString() === value.trim()
    );
    if (match) setSelectedMaterial(match);
    else setShowSuggestions(true);
  };

  const handleSuggestionClick = (material) => {
    setUnInput(material.UN.toString());
    setSelectedMaterial(material);
    setShowSuggestions(false);
  };

  const handleCalculate = () => {
    const material = currentData.find(
      (item) => item.UN.toString() === unInput.trim()
    );

    if (!material) {
      alert("החומר לא נמצא. אנא הזן מספר UN תקין.");
      return;
    }

    const Q = parseFloat(quantity);
    const HU = material.HU;

    if (calcType === "UVCE") {
      const factor = (74500000 * Q) / HU;
      const base = Math.cbrt(factor);
      setResult([
        { label: "הרס כבד למבנים", value: (0.03 * base).toFixed(0) },
        { label: "הרס מוגבל למבנים", value: (0.06 * base).toFixed(0) },
        { label: "הרס כבד לשמשות", value: (0.15 * base).toFixed(0) },
        { label: "הרס מוגבל לשמשות", value: (0.4 * base).toFixed(0) },
      ]);
    } else {
      const ratio = Q / HU;
      setResult([
        {
          label: "אזור פושר (1% + 20%)",
          value: (1.2 * 12.62 * ratio ** 0.4583).toFixed(0),
        },
        { label: "אזור חם (1%)", value: (12.62 * ratio ** 0.4583).toFixed(0) },
        { label: "50%", value: (8.97 * ratio ** 0.4583).toFixed(0) },
        { label: "99%", value: (6.376 * ratio ** 0.4583).toFixed(0) },
      ]);
    }
  };

  const suggestions = currentData.filter((item) =>
    item.UN.toString().startsWith(unInput.trim())
  );

  return (
    <div className="calculator-block">
      <div className="calc-tabs">
        <button
          className={calcType === "UVCE" ? "active" : ""}
          style={{ backgroundColor: calcType === "UVCE" ? color : undefined }}
          onClick={() => {
            setCalcType("UVCE");
            setResult(null);
            setUnInput("");
            setSelectedMaterial(null);
          }}
        >
          UVCE
        </button>
        <button
          className={calcType === "BLEVE" ? "active" : ""}
          style={{ backgroundColor: calcType === "BLEVE" ? color : undefined }}
          onClick={() => {
            setCalcType("BLEVE");
            setResult(null);
            setUnInput("");
            setSelectedMaterial(null);
          }}
        >
          BLEVE
        </button>
      </div>

      <div className="calc-inputs">
        <div className="un-row">
          <input
            type="number"
            placeholder="הזן את מספר הUN.."
            value={unInput}
            onChange={handleUNChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            onKeyDown={(e) => {
              if (["e", "E", "+", "-", "."].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
          {selectedMaterial && (
            <div className="material-name">{selectedMaterial.Material}</div>
          )}
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <ul className="suggestion-list">
            {suggestions.map((item, i) => (
              <li key={i} onClick={() => handleSuggestionClick(item)}>
                {item.UN} – {item.Material}
              </li>
            ))}
          </ul>
        )}

        <input
          type="number"
          placeholder="הזן את כמות החומר (kg)..."
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          onKeyDown={(e) => {
            if (["e", "E", "+", "-", "."].includes(e.key)) {
              e.preventDefault();
            }
          }}
        />

        <button
          className="calc-btn"
          style={{ backgroundColor: color }}
          onClick={handleCalculate}
        >
          חשב
        </button>
      </div>

      {result && (
        <table className="calc-table">
          <thead>
            <tr>
              <th>טווח [m]</th>
              <th>פירוט</th>
            </tr>
          </thead>
          <tbody>
            {result.map((row, i) => (
              <tr key={i}>
                <td>{row.value}</td>
                <td>{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CalculatorBlock;
