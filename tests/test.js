const assert = require('assert');
const { sum } = require('../src/sum');

(function run() {
  assert.strictEqual(sum(1, 2), 3, '1 + 2 should equal 3');
  assert.throws(() => sum('1', 2), /expects two numbers/);
  console.log('All tests passed ✅');
})();
