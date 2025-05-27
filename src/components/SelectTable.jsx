import { useState } from 'react';

function SelectTable({ title, columnTitles, placeholder, options }) {
  const [selected, setSelected] = useState(null);

  const handleChange = (e) => {
    const selectedOption = options.find(opt => opt.option === e.target.value);
    setSelected(selectedOption);
  };

  return (
    <div className="select-table">
      {title && <h2 className="select-table-title">{title}</h2>}

      <select className="select-table-dropdown" onChange={handleChange} defaultValue="">
        <option value="" disabled>{placeholder}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.option}>{opt.option}</option>
        ))}
      </select>

      {selected && (
        <div className="select-table-result">
          <table className="select-table-table">
            <thead>
              <tr>
                {columnTitles.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {selected.columns
                  ? selected.columns.map((val, i) => <td key={i}>{val}</td>)
                  : <td colSpan={columnTitles.length}>{selected.description}</td>
                }
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SelectTable;
