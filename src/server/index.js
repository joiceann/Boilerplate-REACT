/*
*   Referencias
*    1. https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f
*    2. https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
*/

import WebServer from './web.server'
let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });