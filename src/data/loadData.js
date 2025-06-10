import management from "./topics/management.json";
import emergency from "./topics/emergency.json";
import risks from "./topics/risks.json";
import law from "./topics/law.json";
import routine from "./topics/routine.json";
import classification from "./topics/classification.json";
import definitions from "./topics/definitions.json";
import search from "./topics/search.json";
import calculator from "./topics/calculator.json";
import knowledge from "./topics/knowledge.json";
import materials from "./topics/materials.json";

const map = {
  'ניהול אירוע חומ"ס': management,
  "שגרת חירום": emergency,
  "הערכת סיכונים": risks,
  "סמכויות חוקיות": law,
  "ניהול שגרה": routine,
  'סיווג חומ"ס': classification,
  "הגדרות ועזרים": definitions,
  "חיפוש חומר": search,
  "מחשבון דון": calculator,
  "אתר שימור ידע": knowledge,
  "חיפוש חומר": materials,
};

export const categoryColors = {
  'ניהול אירוע חומ"ס': "#2683C6",
  "שגרת חירום": "#7A8C8E",
  "הערכת סיכונים": "#84ACB6",
  "סמכויות חוקיות": "#58B6C0",
  "ניהול שגרה": "#75BDA7",
  'סיווג חומ"ס': "#3494BA",
  "הגדרות ועזרים": "#008C95",
  "מחשבון דון": "#1C257D",
  "חיפוש חומר": "#6C757D",
  "אתר שימור ידע": "#8C757D",
};

export default function loadData(categoryId) {
  return map[categoryId] || {};
}
