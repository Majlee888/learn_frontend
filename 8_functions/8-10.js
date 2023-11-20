
// Задача 8.10

// Написать функцию, принимающую массив чисел. Она должна возвращать true, если в массиве хотя бы одно число делятся на 5, иначе false.
// const arr = [1, 5, 36, 37, 42];
// const arr2 = [9, 6, 76, 3, 32];

// console.log(some(arr)); // true
// console.log(some(arr2)); // false


const arr = [1, 5, 36, 37, 42];
const arr2 = [9, 6, 76, 3, 32];

function some(array) {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
            result = "true";
            break;
        } else {
            result = "false";
        }
    }

    return result;
}

console.log(some(arr));
console.log(some(arr2));
