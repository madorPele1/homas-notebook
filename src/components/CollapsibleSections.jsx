import React, { useState } from "react";

function CollapsibleSections({ sections, color }) {
  const [openSection, setOpenSection] = useState(null);
  const [openSubItem, setOpenSubItem] = useState({});

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
    setOpenSubItem({}); // Reset subitems when switching section
  };

  const toggleSubItem = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenSubItem((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!Array.isArray(sections)) {
    console.warn("CollapsibleSections: 'sections' prop is not an array.");
    return null;
  }

  return (
    <div className="collapsible-container">
      {sections.map((section, secIdx) => (
        <div key={section.id || section.title || secIdx} className="section">
          <button
            style={{ backgroundColor: color }}
            className="section-btn"
            onClick={() => toggleSection(secIdx)}
          >
            {section.title}
          </button>

          {openSection === secIdx && (
            <div style={{ backgroundColor: color }} className="sub-items">
              {Array.isArray(section.items) ? (
                section.items.map((item, itemIdx) => {
                  const isOpen = openSubItem[`${secIdx}-${itemIdx}`];
                  return (
                    <div
                      key={item.id || `${section.title}-${item.title}` || itemIdx}
                      className="sub-item"
                    >
                      <button
                        className="sub-item-btn"
                        onClick={() => toggleSubItem(secIdx, itemIdx)}
                      >
                        {item.icon && <span className="icon">{item.icon}</span>}
                        {item.title}
                      </button>
                      {isOpen && (
                        <div className="sub-item-content">{item.content}</div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="sub-item flat-content">{section.content}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CollapsibleSections;
