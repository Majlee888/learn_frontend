// Метод some() проверяет, удовлетворяет ли какой - либо элемент массива условию, заданному в передаваемой функции.
// Примечание: метод возвращает false при любом условии для пустого массива.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true