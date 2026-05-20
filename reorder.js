const fs = require('fs');

let content = fs.readFileSync('app/page.tsx', 'utf-8');

// The goal is to move SELECTED WORKS SECTION to immediately precede SKILLS & EDUCATION

// Find SELECTED WORKS SECTION
const selectedWorksRegex = /        \{\/\* SELECTED WORKS SECTION \*\/.*?        <\/section>\n/s;
const match = content.match(selectedWorksRegex);
if (!match) {
    console.error("Could not find SELECTED WORKS SECTION");
    process.exit(1);
}

const selectedWorksContent = match[0];

// Remove it from its current position
content = content.replace(selectedWorksContent, '');

// Find where to insert it (before SKILLS & EDUCATION)
const insertTarget = '        {/* SKILLS & EDUCATION */}';
content = content.replace(insertTarget, selectedWorksContent + '\n        {/* SKILLS & EDUCATION */}');

fs.writeFileSync('app/page.tsx', content);
console.log("Success");
