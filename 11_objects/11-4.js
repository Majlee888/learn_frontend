//11.4
//Используя объект из предыдущего задания, вывести в консоль имя и значение каждого свойства.
//const dog = {
//name: "Рекс",
//age: 3,
//breed: "Немецкая овчарка",
//city: "Москва",
//address: "ул. Ленина, 2",
//};

//output
//"name: Рекс"
//"age: 3"
//"breed: Немецкая овчарка"
//"city: Москва"
//"address: ул. Ленина, 2"

const dog = {
    name: "Рекс",
    age: 3,
    breed: "Немецкая овчарка",
    city: "Москва",
    address: "ул. Ленина, 2",
};
const output = Object.entries(dog);
output.forEach(myCallback);
function myCallback(element) {
    console.log(`"${element[0]}: ${element[1]}"`);
}