const request = require('supertest')
const server = require('../index')
describe('Get Endpoints', () => {
    it('Get', (done) => {
        request(server).get('/')
            .then((res) => {
                const body = res.body;
                expect(body.name).toEqual("Joep Sales");
                done();
            })
            .catch((err) => done(err));
        // const res = request(server)
        //     .get('/');
        //     // .send({
        //     //     userId: 1,
        //     //     title: 'test is cool',
        //     // });
        // // expect(res.statusCode).toEqual(200);
        // expect(res.body).toHaveProperty('name');
        // done();
    })
})
afterAll(done => {
    // close server conection
    server.close();
    done();
});