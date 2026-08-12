const test = require('node:test');
const assert = require('node:assert');

const sum = require('./sum');

test('2 + 3 should equal 5', () => {
    assert.strictEqual(sum(5, 4), 10);
});