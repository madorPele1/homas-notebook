import { useState } from "react";

function FilterDecoder({ filterInfo, concentrationInfo }) {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const handleDecode = () => {
        const regex = /(AX|Hg|NO|CO|Reactor|A|B|E|K|P)([1-3]?)/gi;
        const matches = [...input.matchAll(regex)];

        const noConcentrationTypes = ["CO", "HG", "NO", "REACTOR"];

        const decoded = matches.map(([_, rawType, rawLevel]) => {
            const type = rawType.toUpperCase();
            const level = rawLevel;

            const info = filterInfo[type];
            if (!info) return null;

            // If the type is in the list that must NOT include concentrations
            const showConc = !noConcentrationTypes.includes(type);
            const conc = showConc && level ? concentrationInfo[level] : "";

            return {
                text: `${info.label}${conc ? ` - ${conc}` : ""}`,
                color: info.color,
            };
        }).filter(Boolean);

        setResults(decoded);
    };

    return (
        <div className="filter-card">
            <h2 className="filter-title">מציאת סוג מסנן</h2>
            <input
                type="text"
                className="filter-input"
                placeholder="הקלד דגם מסנן (למשל... A1B2P3)"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="filter-button" onClick={handleDecode}>
                חפש
            </button>
            <div className="filter-results">
                {results.map((res, idx) => (
                    <div key={idx} className="filter-line" style={{ color: res.color }}>
                        {res.text}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilterDecoder;
