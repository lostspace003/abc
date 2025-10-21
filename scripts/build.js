const fs = require('fs');
const path = require('path');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

const dist = path.join(__dirname, '..', 'dist');
ensureDir(dist);

const banner = `// Built on ${new Date().toISOString()} for Node 14\n`;
const srcIndexPath = path.join(__dirname, '..', 'src', 'index.js');
const srcCode = fs.readFileSync(srcIndexPath, 'utf8');

fs.writeFileSync(path.join(dist, 'index.js'), banner + srcCode);
console.log('Build complete: dist/index.js created.');
