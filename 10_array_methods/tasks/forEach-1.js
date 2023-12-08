// Задача forEach.1
// Дан числовой массив. Для каждого элементы вывести в консоль следующую строку “Элемент = …, индекс элемента = …”.

const arr = [1, 4, 6, 56, 12, 3];

arr.forEach(myCallback);

function myCallback(element, index) {
    console.log(`Элемент = ${element}, индекс элемента = ${index}`)
}




