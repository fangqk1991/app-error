class AppError extends Error {
  /**
   * @param message {String}
   * @param statusCode {Number}
   * @param extras {Object}
   */
  constructor (message, statusCode = 500, extras = {}) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
    this.statusCode = statusCode
    this.extras = extras
  }
}

module.exports = AppError
