const fs = require('fs');

console.log("🔍 Tailwind Config Check:");
console.log("✔ tailwind.config.js:", fs.existsSync('tailwind.config.js'));
console.log("✔ postcss.config.js:", fs.existsSync('postcss.config.js'));
console.log("✔ src/styles/globals.css:", fs.existsSync('src/styles/globals.css'));

const content = fs.readFileSync('tailwind.config.js', 'utf8');
console.log("➡ Tailwind content field includes `src/`?", content.includes('src/'));

const css = fs.readFileSync('src/styles/globals.css', 'utf8');
console.log("➡ Contains Tailwind directives?", css.includes('@tailwind base') && css.includes('@tailwind utilities'));
