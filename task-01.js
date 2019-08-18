"use strict";


const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива


console.log(users.shift());; // ["Poly", "Ajax", "Chelsey"]
console.log(users);

// // Удалить последний элемент массива
console.log(users.pop())
console.log(users); // ["Poly", "Ajax"]


// // Добавить в начало массива пользователя "Lux"
console.log(users.unshift('Lux'));
console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users.push('Jay', 'Kivi'));
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
const userToDelete = 'Ajax';
const userToDeleteIndx = users.indexOf(userToDelete);
users.splice(userToDeleteIndx, 1);
console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя хранящегося в переменной userToInsert,
// // перед пользователем хранящимся в переменной insertBefore
// Удалить из массива элемент хранящийся в переменной userToDelete

const userToInsert = 'Kong';
const insertBefore = 'Jay';
const insertBeforeIndx = users.indexOf(insertBefore);
const userToInsertIndx = users.indexOf(userToInsert);
users.splice(insertBeforeIndx, 0, userToInsert);
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]