// Дан массив. Проверить, являются ли все элементы числами.
// const arr = [1, 45, 43, 4, 6, 8];
// //output
// true

// const arr = [1, 45, "43", 4, 6, 8];
// //output
// false


const arr1 = [1, 45, 43, 4, 6, 8];

const newElem1 = arr1.every(myCallback);
function myCallback(element) {
    if (typeof element === "number") {
        return true;
    } else {
        return false;
    }
}

console.log(newElem1);

const arr2 = [1, 45, "43", 4, 6, 8];
const newElem2 = arr2.every(myCallback);
console.log(newElem2);

//Решение с помощью стрелочной функции
const arr1 = [1, 45, 43, 4, 6, 8];

const newElem1 = arr1.every((element) => {
    if (typeof element === "number") {
        return true;
    } else {
        return false;
    }
})

console.log(newElem1);

const arr2 = [1, 45, "43", 4, 6, 8];

const newElem2 = arr2.every((element) => {
    if (typeof element === "number") {
        return true;
    } else {
        return false;
    }
})

console.log(newElem2);