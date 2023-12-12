// Созда новый массив, в котором будут находиться только элементы orange из первого массива.
let arr = ["orange", "apple", "apple", "orange", "banana", "peach", "orange"];
const newArr = arr.filter((element) => {
    if (element === "orange") {
        return true;
    } else {
        return false;
    }
});
console.log(newArr);