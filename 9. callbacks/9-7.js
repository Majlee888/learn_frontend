// ***Задача 9.7 (аналог метода find)***

// > ***Примечание**:* Метод **`find()`** возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.
//  В противном случае возвращается `undefined`.
// > 
// - Напишите функцию `find`, которая принимает первым параметром массив, вторым - callback-функцию. 
// Функция `find` должна находить элемент по условию и возвращать его, иначе элемент не найден и возвращает `undefined`.
//  сallback-функцию должна проверять каждый элемент исходного массива на соответствие заданному условию внутри самой сallback-функции. 
//  Она должна принимать два параметра: сам элемент и индекс, а также возвращать булевое значение  (`const result = callback(array[index], index)`, 
//  где `result` может быть либо `true`, либо `false`). Если `result` равен `true`, то необходимо прекратить поиск и вернуть найденный элемент, 
//  если `false`, то продолжаем поиск. Если после завершения поиска, элемент не был найдет, то функция `find` возвращает `undefined`.

// - Передайте в созданную функцию `find` массив строк, 
// а в качестве callback-функции - функцию, которая будет проверять элемент на равенство строке `“apple”.` 
// Если элемент равен строке `“apple”`, то возвращает `true`. в противном случае возвращает `false`. Callback-функцию можно создавать стрелочным способом.


const arr1 = ["apricot", "banana", "kiwi", "lime", "apple", "mango"];
const arr2 = ["apricot", "banana", "kiwi", "lime", "42", "mango"];

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
    if (element === "apple") {
        return true;
    } else {
        return false;
    }
}

const elem1 = find(arr1, myCallbackFunc);
console.log(elem1);
const elem2 = find(arr2, myCallbackFunc);
console.log(elem2)

