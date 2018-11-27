/*
*   Referencias
*    1. https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f
*    2. https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
*/ 

const express = require('express')
export default class WebServer {
  constructor () {
    this.app = express()
    this.app.use(express.static('dist/public'))
  }
  start () {
    return new Promise((resolve, reject) => {
      try {
        this.server = this.app.listen(3000, function () {
          resolve()
        })
      } catch (e) {
        console.error(e)
        reject(e)
      }
    })
  }
  stop () {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve()
        })
      } catch (e) {
        console.error(e.message)
        reject(e)
      }
    })
  }
}