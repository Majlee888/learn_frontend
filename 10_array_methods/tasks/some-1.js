// Задача some.1
// Дан массив. Проверить, есть ли в нём хотя бы один строковый элемента.
// const arr = [1, 45, 43, 4, 6, 8];
// //output
// false

// const arr = [1, 45, "43", 4, 6, 8];
// //output
// true



const arr1 = [1, 45, "43", 4, 6, 8];
const newElem1 = arr1.some(myCallback);

function myCallback(element) {
    if (typeof element === "string") {
        return true;
    } else {
        return false;
    }
}
console.log(newElem1);


const arr2 = [1, 45, 43, 4, 6, 8];
const newElem2 = arr2.some(myCallback);


console.log(newElem2);