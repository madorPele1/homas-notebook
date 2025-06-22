function TextBlock({ content, color }) {
  if (content?.special === "knowledge") {
    const contactItems = content.items || [];
    return (
      <div style={{ margin: "5%", padding: "3%", backgroundColor: "#f5f5f5", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color, borderBottom: `2px solid ${color}`, paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>אתר שימור ידע</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {contactItems.map((item, i) => (
            <li key={i} style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px", fontSize: "1.1rem" }}>
              {item.icon && <span>{item.icon}</span>}
              {item.type === "link" ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "#0077cc", textDecoration: "underline" }}>
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (typeof content === "string") {
    return <p style={{ margin: "4%" }}>{content}</p>;
  }

  if (typeof content === "object") {
    const { type, text, url } = content;

    switch (type) {
      case "title":
        return (
          <div
            style={{
              margin: "4% 2%",
              padding: "4%",
              backgroundColor: color,
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: "6px",
              color: "white",
              textAlign: "center"
            }}
          >
            {text}
          </div>
        );
      case "bullets":
        return (
          <ul style={{ padding: "20px", listStyle: "none" }}>
            {text.map((item, i) => (
              <li
                key={i}
                style={{
                  marginBottom: "0.5rem",
                  lineHeight: "1.6",
                  padding: "1rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "13px",
                  paddingLeft: "10px",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        );
      case "link":
        return (
          <p style={{ margin: "4%" }}>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ color: "#0077cc", textDecoration: "underline" }}>
              {text}
            </a>
          </p>
        );
      case "paragraph":
      default:
        return <p style={{ margin: "4%" }}>{text}</p>;
    }
  }

  return null;
}

export default TextBlock;
