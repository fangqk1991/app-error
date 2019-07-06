export default class AppError extends Error {
  public name: string
  public statusCode: number
  public extras: any

  constructor(message: string, statusCode: number = 500, extras: any = {}) {
    super(message)
    this.name = AppError.name
    Error.captureStackTrace(this, this.constructor)
    this.statusCode = statusCode
    this.extras = extras
  }
}
