// const auth = require('../index');
// const request = require('supertest');


// describe('POST /new', () => {

//     test('Should respond', async () => {
//         const response = await request(auth).post('/api/login/new').send();
//         console.log('response', response);
//     })
// })


// beforeAll(() => {
//   socket = new Server('http://localhost:3000');
// });

// afterAll(() => {
//   socket.close();
// });

// describe('Socket.IO Tests', () => {
//   test('Should receive a "message" event', (done) => {
//     io.emit('message', 'Hello from the server');

//     socket.on('message', (data) => {
//       expect(data).toBe('Hello from the server');
//       done();
//     });
//   });
// });