// Задача find.1
// Дан числовой массив. Найти первый элемент, который нацело делится на 13.
// const arr = [1, 5, 89, 51, 39, 90, 13, 78];

// //output
// 39


const arr = [1, 5, 89, 51, 39, 90, 13, 78];
const newElem = arr.find(myCallback);

function myCallback(element) {
    if (element % 13 === 0) {
        return element;
    }
}
console.log(newElem);


