const request = require('supertest');
const server = require("./server.js")

describe('GET /', () =>{
    it('should return 200 http status code',() =>{
        request(server).get('/').then(res =>{
          expect(res.status).toBe(200)  
        } )
    })
})