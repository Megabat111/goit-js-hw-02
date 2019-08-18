"ese strict";


let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число...');

  if (input !== null) {
    
    let inputNumber = Number(input);
    
    if (Number.isNaN(inputNumber)) {
      alert('Было введено не число, введите ещё раз...');
    } else {
      numbers.push(inputNumber)
    }
  }

} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна: ${total}`);
}
