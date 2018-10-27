import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/calc'

describe('Calc', () => {

    describe('smoke tests', () => {

        it('should exist a method ´sum´', () => {
            expect(sum).to.exist.and.to.be.a('function');
        })

        it('should exist a method ´sub´', () => {
            expect(sub).to.exist.and.to.be.a('function');
        })

        it('should exist a method ´mult´', () => {
            expect(mult).to.exist.and.to.be.a('function');
        })

        it('should exist a method ´div´', () => {
            expect(div).to.exist.and.to.be.a('function');
        })
    })

    describe('sum', () => {
        it('should return a number', () => {
            expect(sum()).to.be.a('number');
        })

        it('should return 4 when ´sum(2, 2)´', () => {
            expect(sum(2, 2)).to.be.equal(4);
        })

        it('should return 10 when ´sum(4, 6)´', () => {
            expect(sum(4, 6)).to.be.equal(10);
        })
    })

    describe('sub', () => {
        it('should return a number', () => {
            expect(sub()).to.be.a('number');
        })

        it('should return 4 when ´sub(10, 6)´', () => {
            expect(sub(10, 6)).to.be.equal(4);
        })
    })

    describe('mult', () => {
        it('should return a number', () => {
            expect(mult()).to.be.a('number');
        })

        it('should return 4 when ´mult(2, 2)´', () => {
            expect(mult(2, 2)).to.be.equal(4);
        })
    })

    describe('div', () => {
        it('should return a number', () => {
            expect(div()).to.be.a('number');
        })

        it('should return 4 when ´div(8, 2)´', () => {
            expect(div(8, 2)).to.be.equal(4);
        })

        it('should return ´Não é possível dividir por zero!´ when divied by zero', () => {
            expect(div(4, 0)).to.be.equal('Não é possível dividir por zero!');
        })
    })
})