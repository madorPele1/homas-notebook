function TextBlock({ content, color }) {
  if (typeof content === "string") {
    return <p style={{ margin: "4%" }}>{content}</p>;
  }

  if (typeof content === "object") {
    const { type, text, url } = content;

    switch (type) {
      case "title":
        return (
          <div style={{
            margin: "4% 2%",
            padding: "4%",
            backgroundColor: color,
            fontWeight: "bold",
            fontSize: "1.2rem",
            borderRadius: "6px",
            color: "white"
          }}>
            {text}
          </div>
        );
      case "bullets":
        return (
          <ul style={{ margin: "4%", paddingLeft: "20px" }}>
            {text.map((item, i) => (
              <li key={i} style={{ marginBottom: "4px" }}>{item}</li>
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
