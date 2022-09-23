"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
const chai_1 = require("chai");
const index_js_1 = require("./index.js");
describe('Encryptions', () => {
    describe('Base64', () => {
        it('From string to base64', done => {
            try {
                const res = (0, index_js_1.toBase64)('Hello World!!');
                (0, chai_1.expect)(res).to.be.a('string');
                (0, chai_1.expect)(res).to.be.equal('SGVsbG8gV29ybGQhIQ==');
                return done();
            }
            catch (e) {
                return done(e);
            }
        });
        it('from base64 to string', done => {
            try {
                const res = (0, index_js_1.fromBase64ToString)('SGVsbG8gV29ybGQhIQ==');
                (0, chai_1.expect)(res).to.be.a('string');
                (0, chai_1.expect)(res).to.be.equal('Hello World!!');
                return done();
            }
            catch (e) {
                return done(e);
            }
        });
    });
    // describe('Binary', () => {
    //   it('Frome string to binary', done => {
    //     try {
    //       const res = eBinary()
    //     } catch (e) {
    //     }
    //   })
    // })
    describe('Crypto', () => {
    });
});
//# sourceMappingURL=test.js.map