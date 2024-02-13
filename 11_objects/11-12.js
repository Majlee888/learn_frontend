// 11.12
// Допустим, что с бекенда приходит массив объектов, в которых одним из свойств является объект пользователей user.Написать функцию, которая будет принимать данный массив и возвращать массив объектов user.При выполнении задачи исходный массив самостоятельно дополнить 4 - 5 объектами.

// input
const users = [
    {
        id: 1,
        user: {
            id: 101,
            name: "Юрий",
            age: 28,
        },
        city: "Москва",
        role: "author",
    },
    {
        id: 2,
        user: {
            id: 102,
            name: "Юлия",
            age: 20,
        },
        city: "Санкт-Петербург",
        role: "reader",
    },
    {
        id: 3,
        user: {
            id: 103,
            name: "Пётр",
            age: 68,
        },
        city: "Санкт-Петербург",
        role: "reader",
    },
    {
        id: 4,
        user: {
            id: 104,
            name: "Анна",
            age: 32,
        },
        city: "Санкт-Петербург",
        role: "author",
    },
];

function newObj(users) {
    let newArr = [];
    for (let i = 0; i < users.length; i++) {
        newArr.push(users[i].user)
    }
    return newArr;
}
const newUsers = newObj(users);
console.log(newUsers);



