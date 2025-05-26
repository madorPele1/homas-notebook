import { useState } from 'react';

function SelectTable({ title, placeholder, options }) {
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
        <div className="select-table-description">
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  );
}

export default SelectTable;
