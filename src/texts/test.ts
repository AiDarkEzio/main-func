import { expect } from 'chai'
import {
  bucin, bucinjson,
  dare, darejson,
  truth, truthjson,
  textpro, textproList
} from './index.js'
describe('Texts', () => {
  describe('Aksara Jawa', () => {

  })
  describe('Bucin', () => {
    it('Bucin', done => {
      bucin().then(res => {
        expect(res).to.be.a('string')

        return done()
      }).catch(done)
    })
    it('Bucin JSON', done => {
      const res = bucinjson
      expect(res).to.be.an('array')
      expect(res).to.have.lengthOf.at.least(365)

      return done()
    })
  })

  describe('Dare', () => {
    it('Dare', done => {
      dare().then(res => {
        expect(res).to.be.a('string')

        return done()
      }).catch(done)
    })
    it('Dare JSON', done => {
      const res = darejson
      expect(res).to.be.an('array')
      expect(res).to.have.lengthOf.at.least(63)

      return done()
    })
  })

  describe('Truth', () => {
    it('Truth', done => {
      truth().then(res => {
        expect(res).to.be.a('string')

        return done()
      }).catch(done)
    })
    it('Truth JSON', done => {
      const res = truthjson
      expect(res).to.be.an('array')
      expect(res).to.have.lengthOf.at.least(61)

      return done()
    })
  })

  describe('TextPro', () => {
    it('TextPro', done => {
      textpro('neon', ['Hallo']).then(res => {
        expect(res).to.be.a('string')

        return done()
      }).catch(done)
    })

    it('TextPro List', done => {
      Promise.resolve(textproList).then(res => {
        expect(res).to.be.an('array')
        expect(res).to.have.lengthOf.at.least(1)

        return done()
      }).catch(done)
    })
  })
})
