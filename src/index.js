const { sum } = require('./sum');

function main() {
  const a = 2, b = 3;
  console.log(`Hello from Node.js CI starter. sum(${a}, ${b}) = ${sum(a,b)}`);
}

if (require.main === module) {
  main();
}

module.exports = { main };
