const AppError = require('../../lib').default
const assert = require('assert')

describe('Test AppError class', function() {
  const message = 'Some error message.'
  const statusCode = 404
  const extras = { k1: 1, k2: 2 }

  it(`Only message.`, () => {
    try {
      throw new AppError(message)
    } catch (err) {
      assert.ok(err.message === message)
      assert.ok(err.statusCode === 500)
      assert.ok(err.name === AppError.name)
    }
  })

  it(`Full parameters.`, () => {
    try {
      throw new AppError(message, statusCode, extras)
    } catch (err) {
      assert.ok(err.message === message)
      assert.ok(err.statusCode === statusCode)
      assert.ok(err.extras === extras)
      assert.ok(err.name === AppError.name)
    }
  })
})
