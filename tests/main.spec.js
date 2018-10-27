import { expect } from 'chai'

describe.skip('Main', () => {
  var numbers;

  before('Inicio Main', () => {
    console.log("Iniciando Testes ...")
  })

  beforeEach(() => {
    numbers = [1, 2, 3];
  })

  it('should have size 4 if add a number', () => {
    numbers.push(4);
    expect(numbers).to.have.lengthOf(4);
  })

  it('should have size 2 if remove a number', () => {
    numbers.pop();
    expect(numbers).to.have.lengthOf(2);
  })

  it('should not contains number 3 if remove a number', () => {
    numbers.pop();
    expect(numbers).to.not.contains(3);
  })
});