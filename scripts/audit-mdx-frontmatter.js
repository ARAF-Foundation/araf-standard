// Audit all .mdx files in src/content/docs for single YAML frontmatter at top
// Usage: node scripts/audit-mdx-frontmatter.js

import fs from 'fs';
import path from 'path';

let __dirname = path.dirname(decodeURIComponent(new URL(import.meta.url).pathname));
if (process.platform === 'win32' && __dirname.startsWith('/')) {
  __dirname = __dirname.slice(1);
}
const DOCS_DIR = path.join(__dirname, '../src/content/docs');

function getAllMdxFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(getAllMdxFiles(fullPath));
    } else if (file.endsWith('.mdx')) {
      results.push(fullPath);
    }
  });
  return results;
}

function checkFrontmatter(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove BOM and leading blank lines
  content = content.replace(/^\uFEFF/, '').replace(/^(\r\n|\n|\r)+/, '');
  // Accept both LF and CRLF, require --- at start, allow trailing whitespace
  const regex = /^---\s*(?:\r\n|\n|\r)([\s\S]*?)(?:\r\n|\n|\r)---\s*(?:\r\n|\n|\r|$)/m;
  const matches = content.match(regex);
  if (!matches) {
    console.error(`\n[DEBUG] File: ${filePath}`);
    console.error('[DEBUG] Content:');
    console.error(content.replace(/\r/g, '<CR>').replace(/\n/g, '<LF>\n'));
    console.error('[DEBUG] Regex did not match frontmatter.');
    return false;
  }
  return true;
}

function main() {
  const files = getAllMdxFiles(DOCS_DIR);
  let failed = [];
  files.forEach(file => {
    if (!checkFrontmatter(file)) {
      failed.push(file);
    }
  });
  if (failed.length === 0) {
    console.log('All .mdx files have a single YAML frontmatter block at the top.');
    process.exit(0);
  } else {
    console.error('Files with missing or invalid frontmatter:');
    failed.forEach(f => console.error(' - ' + f));
    process.exit(1);
  }
}

main();
