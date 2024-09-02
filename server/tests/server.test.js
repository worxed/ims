// import { expect } from 'chai';
const chai = require('chai');
const expect = chai.expect;

const request = require('supertest');

describe('GET /', () => {
    it('should return "it works."', async () => {
        const response = await request('http://localhost:3000').get('/');
        expect(response.status).to.equal(200);
        expect(response.text).to.equal('it works.');
    });
});