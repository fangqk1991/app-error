const AppError = require('..')
const assert = require('assert')

describe('Test AppError class', function() {
  const errorMsg = 'Some error message.'
  const errorStatus = 404
  const errorExtras = { k1: 1, k2: 2 }

  it(`only message.`, () => {
    try {
      throw new AppError(errorMsg)
    } catch (err) {
      assert.ok(err.message === errorMsg)
      assert.ok(err.statusCode === 500)
      assert.ok(err instanceof AppError)
    }
  })

  it(`Full parameters.`, () => {
    try {
      throw new AppError(errorMsg, errorStatus, errorExtras)
    } catch (err) {
      assert.ok(err.message === errorMsg)
      assert.ok(err.statusCode === errorStatus)
      assert.ok(err.extras === errorExtras)
      assert.ok(err instanceof AppError)
    }
  })
})
