// 9.8
// Используйте функцию find из предыдущей задачи.
//  Функция find будет принимать числовой массив. Напишите callback-функцию, 
//  которая будет проверять элемент на условие - его остаток от деления на 5 должен равняться 3. 
//  Если элемент удовлетворяет условию, возвращает true, иначе false. Callback-функцию можно создавать стрелочным способом.


const arr1 = [3, 8, 13, 18];
const arr2 = [4, 7, 9, 10];

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i], i)

        if (result) {
            return array[i];
        }
    }

    return undefined;
}


function myCallbackFunc(element) {
    if (element % 5 === 3) {
        return true;
    } else {
        return false;
    }
}

const elem1 = find(arr1, myCallbackFunc);
const elem2 = find(arr2, myCallbackFunc);
console.log(elem1);
console.log(elem2);

