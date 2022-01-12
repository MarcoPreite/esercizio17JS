function calculate() {
  let x = 0;
  return {
    add: function (n) {
      x += n;
      return this
    },
    multiply: function (n) {
      x *= n;
      return this
    },
    sub: function (n) {
      x -= n;
      return this
    },
    divide: function (n) {
      x /= n;
      return this
    },
    printResult: function () {
      console.log(x)
      return this
    }
  }
}

const calculator = calculate();
// calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
console.log(calculator.add(2).printResult())