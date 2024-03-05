// *** Задача 11.14 ***

//     Дан объект.Написать функцию, которая будет возвращать новый объект, в котором имена и значения свойств поменяются местами.Для решения задачи,
//         возможно, потребуется метод объектов, который в практикуме не описывался, его можно найти в документации.

// input
const dog = {
    name: "Рекс",
    age: 3,
    home: "Москва",
};

// output
// const newDog = {
//     "Рекс": "name",
//     "3": "age",
//     "Москва": "home",
// };


function newObj(dog) {
    const newDog1 = dog.reverse(function (key, value) => {

        return {
            value: key,
        }
    }
    )
}
const newDog = newObj(dog);
// второй способ

// function newObj(obj){
//     const arr = Object.entries(obj);
// const newArr = arr.map((element) => {
//     let newElem = [];
//   newElem[0] = element[1];
//   newElem[1] = element[0];
//   return newElem;
// });

// const newObj = Object.fromEntries(newArr);
// return newObj;
// }


// const newDog = newObj(dog);
// console.log(newDog);

