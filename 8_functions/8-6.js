
// Задача 8.6
// Написать функцию, принимающую массив чисел. Она должна возвращать элемент с минимальным значением.
// console.log(min([1, 42, 34, 12])); // 1
// console.log(min([-5, -10, -100])); // -100


let arr = [1, 42, 34, 12];
function min(array) {
    let minElem = array[0];
    for (let i = 0; i < array.length; i++) {
        if (minElem > array[i]) {
            minElem = array[i];
        }
    }
    return minElem;
}
console.log(min(arr));


