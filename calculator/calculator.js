class Calculator {
    firstNumber;
    secondNumber;
    operator;
    value;

    constructor(firstNumber, secondNumber, operator) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
        this.operator = operator;
        this.value = 0;
    }

    // determine the current operation's label
    getAction() {

        operator = this.operator;

    }

    // performa a calculation based on the currently selected operation
    operate() {

        if (this.operator == "add") {

           return value = this.add();

        } else if (this.operator == "subtract") {

            return value = this.subtract();

        } else if (this.operator == "multiply") {

            return value = this.multiply();

        } else if (this.operator == "divide") {

            return value = this.divide();

        } else {

            value = alert("An error occured. Please try again.");

        }

    }

    attemptedDivideByZero = false;

    // perform addition operation
    add() {

        value = this.firstNumber + this.secondNumber;

    }

    // perform subtraction operation
    subtract() {

        value = this.firstNumber - this.secondNumber;

    }

    // perform multiplication operation
    multiply() {

        value = this.firstNumber * this.secondNumber

    }

    // perform divide operation
    divide() {

        if (num1 != 0 && num2 != 0) {

            value = this.firstNumber / this.secondNumber;

        } else {

            alert("You cannot divide by 0. Please try again.");
            this.attemptedDivideByZero = true;
        }
    }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
