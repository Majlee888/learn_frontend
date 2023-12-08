// Метод includes()экземпляров Arrayопределяет, включает ли массив определенное значение среди своих записей, возвращаемых trueили falseсоответствующих.
// Метод includes()сравнивается searchElementс элементами массива с использованием алгоритма SameValueZero. 
// Все нулевые значения считаются равными, независимо от знака. (То есть - 0равен 0), но неfalse считается таким же, как.можно правильно искать.0NaN

// При использовании с разреженными массивами метод includes()перебирает пустые слоты, как если бы они имели значение undefined.

// Метод includes()является универсальным.Он ожидает только, thisчто значение будет иметь lengthсвойство и свойства с целочисленным ключом.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false


[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false

// Index больше или равен длине массива
// Если Indexбольше или равно длине массива, falseвозвращается.Массив не будет искаться.
const arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false

// Расчетный индекс меньше 0
// Если Index отрицательное значение, вычисленный индекс рассчитывается для использования в качестве позиции в массиве,
// с которой следует начать поиск searchElement.
// Если вычисленный индекс меньше или равен 0, поиск будет производиться по всему массиву.
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false