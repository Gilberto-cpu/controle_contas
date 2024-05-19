const request = require('supertest');
const app = require('./server');

describe('POST /botao', () => {
    it('should return the correct payment total', async () => {
        const response = await request(app)
            .post('/botao')
            .send({
                inputCpfl: "100",
                inputCondo: "50",
                inputFaculdade: "20",
                inputCartao: "10",
                inputIoutros: "5",
                inputPensao: "5",
                inputCasa: "5",
                inputInternet: "5"
            });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('resultado', 0);
    });
    it('should handle missing values', async () => {
        const response = await request(app)
            .post('/botao')
            .send({
                inputCpfl: "100",
                inputCondo: "50",
                inputFaculdade: "",
                inputCartao: "10",
                inputIoutros: "5",
                inputPensao: "5",
                inputCasa: "5",
                inputInternet: ""
            });
        
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('resultado', 25);
    });

});
