const app = require('../src/Server') // Link to  server file
const supertest = require('supertest')
const request = supertest(app)
app.get('/test', async(req, res) => {
    res.json({ message: 'pass!' })

})
it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/test')

    // ...
    done()
})
it('gets the test endpoint', async done => {
    const response = await request.get('/test')

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')

    done()
})
