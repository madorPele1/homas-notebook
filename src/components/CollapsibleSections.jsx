import React, { useState } from "react";

function CollapsibleSections({ sections, color }) {
  const [openSection, setOpenSection] = useState(null);
  const [openSubItem, setOpenSubItem] = useState({});

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
    setOpenSubItem({});
  };

  const toggleSubItem = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenSubItem((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderWithLineBreaks = (text) => {
    return text?.split("\n").map((part, idx) => (
      <React.Fragment key={idx}>
        {part}
        <br />
      </React.Fragment>
    ));
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
            <img
              src="/homas-notebook/assets/back-icon.svg"
              alt=""
              className={`toggle-icon ${openSection === secIdx ? "rotated" : ""}`}
            />
            {section.title}
          </button>

          {openSection === secIdx && (
            <div style={{ backgroundColor: color }} className="sub-items">
              {/* Pre-content (above items) */}
              {section.preContent && (
                <div className="sub-item flat-content">
                  {renderWithLineBreaks(section.preContent)}
                </div>
              )}

              {/* Items (if present) */}
              {Array.isArray(section.items) &&
                section.items.map((item, itemIdx) => {
                  const isAlwaysOpen = section.autoExpand === true;
                  const isOpen = isAlwaysOpen || openSubItem[`${secIdx}-${itemIdx}`];

                  return (
                    <div
                      key={item.id || `${section.title}-${item.title}` || itemIdx}
                      className="sub-item"
                    >
                      {isAlwaysOpen ? (
                        <div className="sub-item-btn">
                          {item.icon && <span className="icon">{item.icon}</span>}
                          {item.title}
                        </div>
                      ) : (
                        <button
                          className="sub-item-btn"
                          onClick={() => toggleSubItem(secIdx, itemIdx)}
                        >
                          {item.icon && <span className="icon">{item.icon}</span>}
                          {item.title}
                        </button>
                      )}

                      {isOpen && (
                        <div className="sub-item-content">
                          {item.image && (
                            <img
                              src={item.image}
                              alt=""
                              className="section-image"
                            />
                          )}
                          {renderWithLineBreaks(item.content)}
                        </div>
                      )}
                    </div>
                  );
                })}

              {/* Post-content (below items) */}
              {(section.postContent || section.image) && (
                <div className="sub-item flat-content">
                  {section.image && (
                    <img
                      src={section.image}
                      alt=""
                      style={{
                        width: section.imageWidth || "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                    />
                  )}
                  {renderWithLineBreaks(section.postContent)}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CollapsibleSections;
