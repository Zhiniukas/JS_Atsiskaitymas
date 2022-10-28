/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(number1 = 0, number2 = 0) {
  this.sum = function () {
    return number1 + number2;
  };
  this.subtraction = function () {
    return number1 - number2;
  };
  this.multiplication = function () {
    return number1 * number2;
  };
  this.division = function () {
    return number1 / number2;
  };
}

const testas = new Calculator(12, 5);
console.log(testas.sum());
console.log(testas.subtraction());
console.log(testas.multiplication());
console.log(testas.division());
