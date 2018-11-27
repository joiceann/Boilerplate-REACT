/*
*   Referencias
*    1. https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f
*    2. https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
*/

import WebServer from './web.server'
describe('Started', () => {
  let webServer = null
  beforeAll(() => {
    webServer = new WebServer()
  })
  test('Iniciar y disparar una callback', async () => {
    let promise = webServer.start()
    await expect(promise).resolves.toBeUndefined()
  })
  test('Detener y disparar una callback', async () => {
    let promise = webServer.stop()
    await expect(promise).resolves.toBeUndefined()
  })
})