
// создание пустого объекта
const obj = {};

// создание объекта со свойствами
const objNotEmpty = {
    firstName: "ALex",
    age: 29,
    addres: "СПБ",
    "last name": "Петров",
}

//получение данных свойств
const age = objNotEmpty.age;
//console.log(age);
//console.log(objNotEmpty.addres);

// создание свойств
obj.color = "red";
obj.border = "1px solod black";
obj["last name"] = "Петров";

//console.log("создание свойств", obj);

// удаление свойств
delete obj["last name"];
delete obj.color;

// затирание свойства
obj.border = undefined;
//console.log("удаление свойств", obj);

// методы объектов
// 1. метод keys
const keys = Object.keys(objNotEmpty);
console.log(keys);

//2. метод values
const values = Object.values(objNotEmpty);
console.log(values);

//3. метод entries
const entries = Object.entries(objNotEmpty);
console.log(entries);

//цикл for..in
for (let key in objNotEmpty) {
    console.log(`key: ${key}, value: ${objNotEmpty[key]}`);
}


const cat = {
    name: "Мурка",
    age: 5,
};

const nameCat = cat.name;
cat.adres = "Moskow";
cat.color = "white";
cat.adres = undefined;

const adres = "NSK";
cat.adres = adres;

console.log(cat);

const cat2 = {
    name: cat.name,
    age: cat.age,
}
console.log(cat2);

const cat3 = {
    ...cat2,
    adres: "СПБ",
    name: undefined,
}

console.log(cat3);







