console.log("Skriptet startade.");
process.on('uncaughtException', function(err) { console.error('Fel:', err); });
const fs = require("fs");
const path = require("path");

const config = require("./tailwind.config.js");

// Sätt vilka nycklar du vill kolla (t.ex. 'spacing', 'height', 'maxWidth')
const tokenGroups = ["spacing", "height", "maxWidth"];

// Hämta alla token-namn
let tokens = [];
tokenGroups.forEach(group => {
  const groupTokens = config.theme.extend[group];
  if (groupTokens) tokens = tokens.concat(Object.keys(groupTokens));
});

// Sök efter tokens i hela projektet
const files = [];
function findFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) findFiles(full);
    else if (/\.(js|ts|jsx|tsx|css)$/.test(file)) files.push(full);
  });
}
["app"].forEach(findFiles);

// Kolla varje token mot filerna
const unused = [];
tokens.forEach(token => {
  const className = `-${token}`;
  const hClass = `h-${token}`;
  const wClass = `w-${token}`;
  const pxClass = `px-${token}`;
  const pyClass = `py-${token}`;
  const found = files.some(file => {
    const content = fs.readFileSync(file, "utf8");
    return (
      content.includes(className) ||
      content.includes(hClass) ||
      content.includes(wClass) ||
      content.includes(pxClass) ||
      content.includes(pyClass)
    );
  });
  if (!found) unused.push(token);
});

console.log("\nOanvända tokens:");
console.log(unused.join("\n") || "Alla används!");