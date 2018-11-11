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