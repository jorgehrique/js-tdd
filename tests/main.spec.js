describe('Main', function () {
  var numbers;

  beforeEach(function () {
    numbers = [1, 2, 3];
  })

  it('should have size 4 if add a number', function () {
    numbers.push(4);
    console.log("length: " + numbers.length);
  })

  it('should have size 2 if remove a number', function () {
    numbers.pop();
    console.log("length: " + numbers.length);
  })

});