// Задача 8.11

// Написать функцию, принимающую массив чисел. Она должна возвращать true, если в массиве все числа двузначные, иначе false.
// const arr1 = [18, 95, 36, 37, 42];
// const arr2 = [9, 6, 76, 3, 32];
// let arr3 = [34, 53, 12, 34, 4];
// let arr4 = [32, 45, 12, 443];
// let arr5 = [45, 23, 432, 3];
// console.log(every(arr1)); // true
// console.log(every(arr2)); // false
// console.log(every(arr3));
// console.log(every(arr4));
// console.log(every(arr5));


let arr1 = [18, 95, 36, 37, 42];
let arr2 = [9, 6, 76, 3, 32];
let arr3 = [34, 53, 12, 34, 4];
let arr4 = [32, 45, 12, 443];
let arr5 = [45, 23, 432, 3];

function every(array) {
    let result = "";

    for (let i = 0; i < array.length; i++) {
        //  console.log(i);

        if (array[i] >= 10 && array[i] <= 99) {
            result = true;

        } else {
            result = false;
            break;
        }

        //  console.log(i);
    }

    return result;
}

console.log(every(arr1));
console.log(every(arr2));
console.log(every(arr3));
console.log(every(arr4));
console.log(every(arr5));

