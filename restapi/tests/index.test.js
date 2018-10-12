const index = require('../index')

test('Checks that index.js returns text', () => {
	expect(index()).toBe('ok')
})
