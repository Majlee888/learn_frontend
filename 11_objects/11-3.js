//11/3

//Используя объект из предыдущего задания, вывести в консоль все значения его свойств.

//const dog = {
//name: "Рекс",
//age: 3,
//breed: "Немецкая овчарка",
//city: "Москва",
//	address: "ул. Ленина, 2",
//};

//output
//name
//age
//breed
//city
//address

const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};

const output = Object.values(dog);
output.forEach(myCallback);
function myCallback(element) {
    console.log(element);
}