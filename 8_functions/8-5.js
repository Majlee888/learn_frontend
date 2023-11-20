
// Задача 8.5


// Написать функцию, принимающую массив чисел. Она должна развращать элемент с максимальным значением. 
// console.log(max([1, 42, 34, 12])); // 42
// console.log(max([-5, -10, -100])); // -5


let arr = [-2, -42, 34, -12];

function max(array) {
    let maxElem = array[0];
    for (let i = 0; i < array.length; i++) {
        if (maxElem < array[i]) {
            maxElem = array[i];
        }
    }

    return maxElem;
}

console.log(max(arr));
