describe('pow', function() {
  describe('возводит x в степень n', function() {

    before(function() {
      console.log('Started tests');
    });

    after(function() {
      console.log('Finished tests');
    });

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

    it('при возведении в отрицательную степень результат NaN', function() {
      assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
    });

    it("при возведении в дробную степень результат NaN", function() {
      assert(isNaN(pow(2, 1.5)), "pow(2, 1.5) не NaN");
    });

    it("ноль в нулевой степени даёт NaN", function() {
      assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
    });

    it('любое число в степени 0 будет равно 1', function() {
      assert.equal(pow(2, 0), 1);
    });
  });
});