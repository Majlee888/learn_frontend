// / Найти первый элемент в массиве с типом string и вывести его в консоль.
let arr = [56, 57, 456, "dgd", 436, "324", 326];

const foundElem = arr.find((element) => {
    if (typeof element === "string") {
        return true;
    }
})
console.log(foundElem);
