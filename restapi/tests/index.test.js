const index = require('../index')

test('Checks that index.js returns text', done => {
  function callback(data) {
    expect(data).toBe('ok');
    done();
  }

  index(callback);
});
