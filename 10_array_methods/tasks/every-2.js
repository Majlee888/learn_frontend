// Проверить, все ли числа в массиве больше 10. Если да, то вернуть true, иначе false.
let arr = [43, 45, 23, 21, 435];

const newArr = arr.every((element) => {
    if (element > 10) {
        return true;
    } else {
        return false;
    }
})
console.log(newArr);