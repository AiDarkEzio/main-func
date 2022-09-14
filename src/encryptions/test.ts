/* eslint-disable no-undef */
import { expect } from 'chai'
import {
  toBase64,
  fromBase64ToString,
} from './index.js'

describe('Encryptions', () => {
  describe('Base64', () => {
    it('From string to base64', done => {
      try {
        const res = toBase64('Hello World!!')
        expect(res).to.be.a('string')
        expect(res).to.be.equal('SGVsbG8gV29ybGQhIQ==')

        return done()
      } catch (e) {
        return done(e)
      }
    })

    it('from base64 to string', done => {
      try {
        const res = fromBase64ToString('SGVsbG8gV29ybGQhIQ==')
        expect(res).to.be.a('string')
        expect(res).to.be.equal('Hello World!!')

        return done()
      } catch (e) {
        return done(e)
      }
    })
  })

  describe('Crypto', () => {
    
  })
})
