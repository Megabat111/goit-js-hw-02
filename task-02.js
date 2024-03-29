"use strict";

// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Вызовы функции для проверки работоспособности твоей реализации.


function logItems (array) {
    console.log('logItems');
    for (let i = 0; i < array.length; i += 1) {
      const index = i + 1;
      const arr = array[i];
      console.log(`${index} - ${arr}`);
    };
    
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);