var expect = require('chai').expect;
var calc = require('../src/calc');

describe('Calc', function () {

    describe('smoke tests', function () {

        it('should exist calc module', function () {
            expect(calc).to.exist;
        })

        it('should exist a method ´sum´', function () {
            expect(calc.sum).to.exist.and.to.be.a('function');
        })

        it('should exist a method ´sub´', function () {
            expect(calc.sub).to.exist.and.to.be.a('function');
        })

        it('should exist a method ´mult´', function () {
            expect(calc.mult).to.exist.and.to.be.a('function');
        })

        it('should exist a method ´div´', function () {
            expect(calc.div).to.exist.and.to.be.a('function');
        })
    })

    describe('sum', function () {
        it('should return a number', function () {
            expect(calc.sum()).to.be.a('number');
        })

        it('should return 4 when ´sum(2, 2)´', function () {
            expect(calc.sum(2, 2)).to.be.equal(4);
        })

        it('should return 10 when ´sum(4, 6)´', function () {
            expect(calc.sum(4, 6)).to.be.equal(10);
        })
    })

    describe('sub', function () {
        it('should return a number', function () {
            expect(calc.sub()).to.be.a('number');
        })

        it('should return 4 when ´sub(10, 6)´', function () {
            expect(calc.sub(10, 6)).to.be.equal(4);
        })
    })

    describe('mult', function () {
        it('should return a number', function () {
            expect(calc.mult()).to.be.a('number');
        })

        it('should return 4 when ´mult(2, 2)´', function () {
            expect(calc.mult(2, 2)).to.be.equal(4);
        })
    })

    describe('div', function () {
        it('should return a number', function () {
            expect(calc.div()).to.be.a('number');
        })

        it('should return 4 when ´div(8, 2)´', function () {
            expect(calc.div(8, 2)).to.be.equal(4);
        })

        it('should return ´Não é possível dividir por zero!´ when divied by zero', function () {
            expect(calc.div(4, 0)).to.be.equal('Não é possível dividir por zero!');
        })
    })
})