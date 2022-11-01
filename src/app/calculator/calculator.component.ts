import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  userOperation = '0';
  displayNumber = '0';
  firstNumber = 0;
  secondNumber = 0;
  operation = '';

  calculate(operation: string) {
    if (!this.displayNumber.endsWith('.')) {
      if (operation === 'sqrt') {
        this.manageSqrt()
      } else if (operation === '+' || operation === '-' || operation === '*' || operation === '/' || operation === '**') {
        this.manageOperations(operation)
      } else if (operation === '=') {
        this.manageEqual()
      }
    }
  }

  clear() {
    this.firstNumber = 0
    this.secondNumber = 0
    this.operation = '';
  }

  clearAll() {
    this.userOperation = '0';
    this.displayNumber = '0';
    this.clear()
  }

  getNumber(number: string) {
    if (this.operation === '') {
      this.userOperation === '0' ? this.userOperation = number : this.userOperation += number;
      this.displayNumber === '0' ? this.displayNumber = number : this.displayNumber += number;
    } else {
      this.displayNumber += number
      this.userOperation = this.firstNumber + this.operation + this.displayNumber
    }
  }

  getNegativeNumber() {
    if (this.operation === '' && this.displayNumber !== '0') {
      if (!this.displayNumber.includes('-')) {
        this.displayNumber = `-${this.displayNumber}`
        this.userOperation = this.displayNumber
      } else {
        this.displayNumber = this.displayNumber.replace('-', '')
        this.userOperation = this.displayNumber
      }
    } else if (this.operation !== '' && this.displayNumber !== '0' && +this.displayNumber !== this.firstNumber) {
      if (!this.displayNumber.includes('-')) {
        this.displayNumber = `-${this.displayNumber}`
        this.userOperation = this.firstNumber + this.operation + this.displayNumber
      } else {
        this.displayNumber = this.displayNumber.replace('-', '')
        this.userOperation = this.firstNumber + this.operation + this.displayNumber
      }
    }
  }

  getDecimal() {
    if (!this.displayNumber.includes('.')) {
      this.userOperation += '.'
      this.displayNumber += '.'
    }
  }

  manageSqrt() {
    this.userOperation = String(this.sqrt(+this.displayNumber))
    this.displayNumber = String(this.sqrt(+this.displayNumber))
  }

  manageOperations(operation: string) {
    if (this.operation === '') {
      this.operation = operation
      this.userOperation += operation
      this.firstNumber = +this.displayNumber
      this.displayNumber = ''
    }
  }

  manageEqual() {
    this.secondNumber = +this.displayNumber
    switch (this.operation) {
      case '+':
        this.displayNumber = String(this.sum(this.firstNumber, this.secondNumber))
        break;
      case '-':
        this.displayNumber = String(this.minus(this.firstNumber, this.secondNumber))
        break;
      case '*':
        this.displayNumber = String(this.multiply(this.firstNumber, this.secondNumber))
        break;
      case '/':
        this.displayNumber = String(this.divide(this.firstNumber, this.secondNumber))
        break;
      case '**':
        this.displayNumber = String(this.power(this.firstNumber, this.secondNumber))
        break;
    }
    this.clear()
  }

  sqrt(number: number) {
    return Math.sqrt(number);
  }

  power(number: number, powerNumber: number) {
    return Math.pow(number, powerNumber);
  }

  sum(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber
  }

  minus(firstNumber: number, secondNumber: number) {
    return firstNumber - secondNumber
  }

  multiply(firstNumber: number, secondNumber: number) {
    return firstNumber * secondNumber
  }

  divide(firstNumber: number, secondNumber: number) {
    if (secondNumber === 0) {
      throw "Don't try to divide by zero!"
    }
    
    return firstNumber / secondNumber
  }
}