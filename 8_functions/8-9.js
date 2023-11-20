
// Задача 8.9
// Написать функцию, принимающую массив отрицательных и положительных чисел. Она должна возвращать новый массив только с отрицательными числами.
// const arr = [43, -23, -12, 5, -1, 42];

// const arrWithNegative = filter(arr);

// console.log(arrWithNegative); // [-23, -12, -1]



const arr = [43, -23, -12, 5, -1, 42];

const arrWithNegative = filter(arr);

function filter(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0)
            result.push(array[i]);
    }
    return result;


}
console.log(arrWithNegative);


