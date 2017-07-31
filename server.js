const express = require('express')
const proxy = require('express-http-proxy')
const morgan = require('morgan')
const app = express()

app
  .use(morgan(':method :url :status :res[content-length] - :response-time ms'))
  .use(proxy(process.env.URL))
  .listen(process.env.PORT, () => {
    console.log(`Proxy for ${process.env.URL} running on port ${process.env.PORT}`)
  })