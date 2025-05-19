import management from "./topics/management.json";
import emergency from "./topics/emergency.json";
import risks from "./topics/risks.json";
import law from "./topics/law.json";
import routine from "./topics/routine.json";
import classification from "./topics/classification.json";
import definitions from "./topics/definitions.json";
import search from "./topics/search.json";

const map = {
  'ניהול אירוע חומ"ס': management,
  "שגרת חירום": emergency,
  "הערכת סיכונים": risks,
  "סמכויות חוקיות": law,
  "ניהול שגרה": routine,
  'סיווג חומ"ס': classification,
  "הגדרות ועזרים": definitions,
  "חיפוש חומר": search,
};

export default function loadData(categoryId) {
  return map[categoryId] || {};
}