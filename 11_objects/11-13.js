// 11.13
// Допустим, что с бекенда приходят два массива объектов: users и posts.Написать функцию, которая будет объединять эти массивы в один массив объектов.При выполнении задачи исходные массивы самостоятельно дополнить 4 - 5 объектами.

// input
const users = [
    {
        id: 101,
        name: "Юрий",
    },
    {
        id: 102,
        name: "Анна",
    },
    {
        id: 103,
        name: "Константин",
    },
];

const posts = [
    {
        id: 1,
        userID: 101,
        title: "Что не так с онлайн-курсами?",
        text: "Привет! Меня зовут Юрий, и сегодня я хочу поговорить об онлайн-курсах программирования."
    },
    {
        id: 2,
        userID: 101,
        title: "Что за черт, Javascript",
        text: "Этот пост — список забавных и хитрых примеров на JavaScript. Это отличный язык. У него простой синтаксис, большая экосистема и, что гораздо важнее, огромное сообщество."
    },
    {
        id: 3,
        userID: 103,
        title: "Работа с часовыми поясами в JavaScript",
        text: "Недавно я работал над задачей добавления часовых поясов в JS-библиотеку календаря, которую ведёт моя команда."
    },
]


function newArr(users, posts) {
    let array = posts.map((post) => {

        let author = users.find((user) => post.userID === user.id);

        return {
            id: post.id,
            title: post.title,
            text: post.text,
            author: author.name,
        }
    })
    return array;
}
const newObj = newArr(users, posts);
console.log(newObj);
