const supertest = require('supertest')

//const request = supertest('http://www.google.com')
const request = supertest('http://localhost:3001')

test('Deve responder na porta 3001', () => {
    //acessar a url 'http://localhost:3001'
    //verificar que a resposta foi 200

    return request.get('/')
    .then(res => expect(res.status).toBe(200))
})