// *** Задача 11.11 ***

//     Допустим, что с бекенда приходит массив объектов 
//     со свойствами: { n: “Алексей”, a: 24, h: “Москва”, p: “курьер”, c: “Toyota” }. Написать функцию, которая будет возвращать новый массив объектов,
//      в которых имена свойств будут соответствовать их значениям, например, n заменится на name и т.д.
//      При выполнении задачи исходный массив самостоятельно дополнить 4 - 5 объектами.

const arr = [
    { n: "Алексей", a: 24, h: "Москва", p: "курьер", c: "Toyota", },
    { n: "Евгения", a: 32, h: "Тюмень", p: "юрист", c: "Nissan" },
    { n: "Kate", a: 40, h: "London", p: "doctor", c: "BMW" },
    { n: "Jon", a: 45, h: "Melburn", p: "developer", c: "Mersedes" },
    { n: "Mark", a: 43, h: "Istanbul", p: "veterenarian", c: "Citroen" },
    { n: "Anna", a: 39, h: "Munic", p: "hairstilist", c: "no car" },
];


function newArr(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        arr2.push({
            name: arr[i].n,
            age: arr[i].a,
            home: arr[i].h,
            profession: arr[i].p,
            car: arr[i].c,
        })
    }
    return arr2;
}
const array = newArr(arr);
console.log(array);
