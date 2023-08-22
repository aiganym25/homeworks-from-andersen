// ex1
function concatStrings(val1) {
  if (typeof val1 !== "string") {
    return;
  }
  return function innerFunction1(val2) {};
}

//ex2

class Calculator {
  constructor(args) {
    console.log(argargumentss)
    if (
      args.length !== 2 ||
      typeof args[0] !== "number" ||
      typeof args[1] !== "number"
    ) {
      throw new Error(
        "The input values are not valid. Please, make sure you enter 2 valid numbers"
      );
    } else {
      this.X = args[0];
      this.Y = args[1];
    }
  }

  setX(num) {
    if (typeof num === "undefined" || typeof num !== "number") {
      throw new Error("Please, enter a valid number");
    } else {
      this.X = num;
    }
  }
  setY(num) {
    if (typeof num === "undefined" || typeof num !== "number") {
      throw new Error("Please, enter a valid number");
    } else {
      this.Y = num;
    }
  }

  logSum() {
    return this.X + this.Y;
  }

  logMul() {
    return this.X * this.Y;
  }
  logSub() {
    return this.X - this.Y;
  }
  logDiv() {
    if (this.Y === 0) {
      throw new Error("Not divisible! The second number must not be 0");
    }
    return this.X / this.Y;
  }
}

const calculator = new Calculator(12, 3);
console.log(calculator.logSum())