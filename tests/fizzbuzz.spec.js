/*
  Desafio FizzBuzz
  Escreva uma lib que receba um número e:
  Se o número for divisível por 3, no lugar do número retorna 'Fizz' - X
  Se o número for divisível por 5, no lugar do número retorna 'Buzz' - X
  Se o número for divisível por 3 e 5, no lugar do número retorna 'FizzBuzz' - X
  Se não for múltiplo de nada, retorna o número
*/

import { expect } from 'chai'
import fizzbuzz from '../src/fizzbuzz'

describe('Main', () => {

  describe('FizzBuzz', () => {
    it('should exist a method ´fizzbuzz´', () => {
      expect(fizzbuzz).to.exist.and.to.be.a('function')
    })

    it('should return ´Fizz´ when multiple of 3', () => {
      expect(fizzbuzz(3)).to.be.equal('Fizz')
      expect(fizzbuzz(9)).to.be.equal('Fizz')
    })

    it('should return ´Buzz´ when multiple of 5', () => {
      expect(fizzbuzz(5)).to.be.equal('Buzz')
      expect(fizzbuzz(10)).to.be.equal('Buzz')
    })

    it('should return ´FizzBuzz´ when multiple of 5 and 3', () => {
      expect(fizzbuzz(15)).to.be.equal('FizzBuzz')      
      expect(fizzbuzz(30)).to.be.equal('FizzBuzz')
    })

    it('should return ´{n}´ when NOT multiple of 5 and 3', () => {
      expect(fizzbuzz(11)).to.be.equal(11)      
      expect(fizzbuzz(13)).to.be.equal(13)
    })
  })
})