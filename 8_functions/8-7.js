
// 8.7 Написать функцию, принимающую массив чисел. Она должна возвращать сумму всех элементов.****
// console.log(sum([1, 2, 3, 4])); // 10
// console.log(sum([-5, -10, 15])); // 0


let a = [1, 2, 3, 4];
let b = [-5, -10, 15];


function sum(array) {
    let sumOfArray = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfArray = sumOfArray + array[i];
    }

    return sumOfArray;
}

console.log(sum(a)); // 10
console.log(sum(b)); // 0
