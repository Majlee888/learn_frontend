// Задача find.2
// Дан массив. Найти первый элемент, равный строке “find”.
// const arr = [1, "found", 89, "apple", "fly", 90, "find", 78];

// //output
// "find"


const arr = [1, "found", 89, "apple", "fly", 90, "find", 78];
const newElem = arr.find(myCallback);

function myCallback(element) {
    if (element === "find") {
        return true;
    }
}
console.log(newElem);

//Решение с помощью стрелочной функции

const arr = [1, "found", 89, "apple", "fly", 90, "find", 78];
const newElem = arr.find((element) => {
    if (element === "find") {
        return true;
    }
})
console.log(newElem);



