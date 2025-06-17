const fs = require("fs");
const path = require("path");

const categories = {
  'ניהול אירוע חומ"ס': "management.json",
  "שגרת חירום": "emergency.json",
  "הערכת סיכונים": "risks.json",
  "סמכויות חוקיות": "law.json",
  "ניהול שגרה": "routine.json",
  'סיווג חומ"ס': "classification.json",
  "הגדרות ועזרים": "definitions.json",
  "מחשבון דון": "calculator.json",
  "אתר שימור ידע": "knowledge.json",
  "חיפוש חומר": "materials.json",
};

const srcDir = path.join(__dirname, "src", "data", "topics");
const output = [];

function extractTextsFromComponent(content, category, route, topic) {
  if (typeof content === "string") {
    if (content.length > 3) {
      output.push({ text: content, category, route, topic });
    }
  } else if (Array.isArray(content)) {
    content.forEach((el) => extractTextsFromComponent(el, category, route, topic));
  } else if (typeof content === "object" && content !== null) {
    for (const key in content) {
      // Also capture table headers as text
      if (key === "header" || key === "headers" || key === "title" || key === "text") {
        extractTextsFromComponent(content[key], category, route, topic);
      } else {
        extractTextsFromComponent(content[key], category, route, topic);
      }
    }
  }
}

for (const [category, filename] of Object.entries(categories)) {
  const route = `/category/${encodeURIComponent(category)}`;
  const filePath = path.join(srcDir, filename);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Missing file: ${filename}`);
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (const topic in data) {
    const topicData = data[topic];
    const topicRoute = {
      text: topic,
      category,
      route,
      topic
    };
    output.push(topicRoute);

    extractTextsFromComponent(topicData, category, route, topic);
  }
}

fs.writeFileSync(
  path.join(srcDir, "searchIndex.json"),
  JSON.stringify(output, null, 2),
  "utf-8"
);

console.log("✅ Improved search index generated at src/data/searchIndex.json");
