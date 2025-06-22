import React, { useState } from "react";

function MaterialFilter({ components = [], color = "#00B3C7" }) {
  const [view, setView] = useState("list");
  const [filters, setFilters] = useState({
    type: "",
    un: "",
    name: "",
    risk: "",
  });

  const allMaterials = components.filter((item) => item.SubstanceName);

  const getType = (riskGroup) => {
    const flammable = ["1", "1.1", "2.1", "3", "5.1", "5.2"];
    const toxic = ["2.3", "6.1", "8"];
    if (flammable.includes(riskGroup)) return "חומרים דליקים";
    if (toxic.includes(riskGroup)) return "חומרים רעילים";
    return "";
  };

  const filtered = allMaterials.filter((mat) => {
    const riskGroups =
      mat.RiskGroup?.toString?.()
        .split(";")
        .map((r) => r.trim()) ?? [];
    const typeMatches = riskGroups.some((rg) => getType(rg) === filters.type);
    const riskMatches = riskGroups.some((rg) => rg.includes(filters.risk));
    return (
      (!filters.type || typeMatches) &&
      (!filters.un || mat.UNNumber?.toString?.().includes(filters.un)) &&
      (!filters.name || mat.SubstanceName.includes(filters.name)) &&
      (!filters.risk || riskMatches)
    );
  });

  return (
    <div
      className="material-filter-container"
      style={{ "--main-color": color }}
    >
      <div className="filter-bar">
        <select
          onChange={(e) => setFilters((f) => ({ ...f, type: e.target.value }))}
        >
          <option value="">סוג החומר</option>
          <option value="חומרים דליקים">חומרים דליקים</option>
          <option value="חומרים רעילים">חומרים רעילים</option>
        </select>
        <input
          type="text"
          placeholder="שם החומר"
          onChange={(e) => setFilters((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          type="text"
          placeholder="מספר אום"
          onChange={(e) => setFilters((f) => ({ ...f, un: e.target.value }))}
        />
        <input
          type="text"
          placeholder="קבוצת סיכון"
          onChange={(e) => setFilters((f) => ({ ...f, risk: e.target.value }))}
        />
      </div>

      {view === "list" ? (
        <div className="material-card-list">
          {filtered.map((mat, i) => (
            <div className="material-card" key={i}>
              <h3
                className={
                  mat.SubstanceName.length > 15 ? "long-name" : ""
                }
              >
                {mat.SubstanceName}
              </h3>
              <p>מספר או"ם: {mat.UNNumber}</p>
              <p>CAS: {mat.CAS}</p>
              <p>קבוצת סיכון: {mat.RiskGroup}</p>
              {mat.AEGL3_10 && (
                <p style={{direction: "ltr"}}>
                  <b>AEGL₁₀-3:</b> {mat.AEGL3_10} ppm
                </p>
              )}
              {mat.AEGL2_10 && (
                <p style={{direction: "ltr"}}>
                  <b>AEGL₁₀-2:</b> {mat.AEGL2_10} ppm
                </p>
              )}
              {mat.ExplosionHazardUnit && (
                <p>
                  <b>יח' סיכון פיצוץ:</b> {mat.ExplosionHazardUnit}
                </p>
              )}
              {mat.FireballHazardUnit && (
                <p>
                  <b>יח' סיכון כדור אש:</b> {mat.FireballHazardUnit}
                </p>
              )}
              {mat.SpecialPopulationRisk && (
                <p>
                  <b>סיכון אוכלוסיה:</b> כן
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <table className="material-table">
          <thead>
            <tr>
              <th>שם</th>
              <th>מספר או"ם</th>
              <th>AEGL₁₀-3</th>
              <th>AEGL₁₀-2</th>
              <th>קבוצת סיכון</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((mat, i) => (
              <tr key={i}>
                <td>{mat.SubstanceName}</td>
                <td>{mat.UNNumber}</td>
                <td>{mat.AEGL3_10 || "-"}</td>
                <td>{mat.AEGL2_10 || "-"}</td>
                <td>{mat.RiskGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MaterialFilter;
