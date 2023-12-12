// Задача map.1
// Дан числовой массив. Создать новый массив элементы которого, будут являться строками, созданными из элементов исходного массива.
// const arr = [1, 6, 12, 45, 23, 56];

// //output
// ["1", "6", "12", "45", "23", "56"]


const arr = [1, 6, 12, 45, 23, 56];
const newArr = arr.map(myCallback);

function myCallback(element) {
    return element.toString();
}
console.log(newArr);


//Решение с помощью стрелочной функции

const arr = [1, 6, 12, 45, 23, 56];
const newArr = arr.map((element) => {
    return element.toString();
})
console.log(newArr);


