
// Задача 8.8
// Написать функцию, принимающую массив чисел. Она должна возвращать новый массив с квадратами элементов переданного массива.
// const arr = [1, 2, 3, 4];

// const arrWithSquare = map(arr);

// console.log(arrWithSquare); // [1, 4, 9, 16]


const arr = [1, 2, 3, 4];

const arrWithSquare = map(arr);
function map(array) {
    let result = [];
    for (i = 0; i < array.length; i++) {
        result.push(array[i] ** 2);
    }
    return result;
}
console.log(arrWithSquare);

