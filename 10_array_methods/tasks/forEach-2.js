// Задача forEach.2
// Дан массив. Для каждого элементы вывести в консоль сам элемент и его тип.
// const arr = [1, "Alex", 6, "apple", "1", 12];
// //output
// "Элемент: 1, тип: number"
// "Элемент: Alex, тип: string"
// "Элемент: 6, тип: number"
// "Элемент: apple, тип: string"
// "Элемент: 1, тип: string"
// "Элемент: 12, тип: number"


const arr = [1, "Alex", 6, "apple", "1", 12];

arr.forEach(myCallback)

function myCallback(element) {
    console.log(`Элемент: ${element}, тип: ${typeof element}`);
}

//Решение с помощью стрелочной функции

const arr = [1, "Alex", 6, "apple", "1", 12];

arr.forEach((element) => {
    console.log(`Элемент: ${element}, тип: ${typeof element}`);
}
)




