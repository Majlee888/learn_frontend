// На основе массива, создать новый массив, в котором каждый элемент будет числом.
let arr = ["45", "325", "345", "3"];
const newArr = arr.map((element) => {
    return parseInt(element);
})
console.log(newArr);