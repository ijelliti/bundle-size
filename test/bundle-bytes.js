const assert = require('assert');
const test = require('thout');
const bundleBytes = require('../lib/bundle-bytes');

test('noop - browser-pack code only', function() {
  return bundleBytes('./test/noop').then(function(results) {
    assert(Array.isArray(results.packages));
    assert.deepEqual(results.packages, [ './test/noop' ]);
    assert(results.bundle);
    assert(results.min);
    assert(results.gzip);
  });
});

test('noop - env:development', function() {
  return bundleBytes('./test/noop', 'development').then(function(results) {
    assert(Array.isArray(results.packages));
    assert.deepEqual(results.packages, [ './test/noop' ]);
    assert(results.bundle);
    assert(results.min);
    assert(results.gzip);
    assert(results.env === 'development');
  });
});

test('noop - env:production', function() {
  return bundleBytes('./test/noop', 'production').then(function(results) {
    assert(Array.isArray(results.packages));
    assert.deepEqual(results.packages, [ './test/noop' ]);
    assert(results.bundle);
    assert(results.min);
    assert(results.gzip);
    assert(results.env === 'production');
  });
});

test('multi files', function() {
  return bundleBytes(['./test/noop', './test/noop2']).then(function(results) {
    assert(Array.isArray(results.packages));
    assert.deepEqual(results.packages, [ './test/noop', './test/noop2' ]);
    assert(results.bundle);
    assert(results.min);
    assert(results.gzip);
  });
});
