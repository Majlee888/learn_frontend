// *** Задача 11.7 ***

//     Дан массив объектов.Сформировать новый массив, в котором будут содержаться только значения свойства`email`.

const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
    }
];

// output
// [
//     'Sincere@april.biz',
//     'Shanna@melissa.tv',
//     'Nathan@yesenia.net',
//     'Julianne.OConner@kory.org',
//     'Lucio_Hettinger@annie.ca',
//     'Karley_Dach@jasper.info',
//     'Telly.Hoeger@billy.biz',
//     'Sherwood@rosamond.me',
//     'Chaim_McDermott@dana.io',
//     'Rey.Padberg@karina.biz'
// ]

const output = users.map((element) => element.email);
console.log(output);

//вариант 2
function newObj(users) {
    let newArr = users.map((element) => element.user);

    //for(let i = 0; i < users.length; i++){
    //  newArr.push(users[i].user)
    //}

    return newArr;
}
const newUsers = newObj(users);
console.log(newUsers);
