// Задача filter.3
// Дан массив. Необходимо создать новый массив, в котором будут содержаться только элементы с типом string.

//output
// ["-5", "orange", "number"]


const arr = [1, 4, -32, "-5", 64, "orange", 743, "number"];

const newArr = arr.filter(myCallback);

function myCallback(element) {
    if (typeof element === "string") {
        return true;
    } else {
        return false;
    }
}
console.log(newArr);

