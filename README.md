# app-error
An error class contains statusCode, extras.

## Installation
```
npm install @fangqk1991/app-error
```

## Usage
In Node.js:

```
const AppError = require('@agora-lab/app-error')
...
// somewhere you want to throw an exception.
throw new AppError(message, statusCode, extras)
```
