// Задача map.3
// Дан массив массивов. Создать новый массив, элементами которого будет длины подмассивов исходного массива.
// const arr = [[1, 2, 3], ["apple", "orange"], [34, 5346, 321, 1], ["cat", "dog", "piggy"]];

// //output
// [3, 2, 4, 3]



const arr = [[1, 2, 3], ["apple", "orange"], [34, 5346, 321, 1], ["cat", "dog", "piggy"]];
const newArr = arr.map(myCallback);

function myCallback(element) {
    return element.length;
}
console.log(newArr);

//Решение с помощью стрелочной функции

const arr = [[1, 2, 3], ["apple", "orange"], [34, 5346, 321, 1], ["cat", "dog", "piggy"]];
const newArr = arr.map((element) => {
    return element.length;
})
console.log(newArr);


