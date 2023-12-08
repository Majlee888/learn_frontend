// Метод indexOf()экземпляров Arrayвозвращает первый индекс, по которому данный элемент может быть найден в массиве, или - 1, если он отсутствует.
// Метод indexOf()сравнивается searchElementс элементами массива, используя строгое равенство(тот же алгоритм, который используется оператором ===). 
// NaNзначения никогда не сравниваются как равные, поэтому indexOf()всегда возвращается, -1когда searchElementесть NaN.

// Метод indexOf()пропускает пустые места в разреженных массивах.

// Метод indexOf()является универсальным.Он ожидает только, thisчто значение будет иметь lengthсвойство и свойства с целочисленным ключом.

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1


// В следующем примере используется indexOf()поиск значений в массиве.
const array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

// Вы не можете использовать indexOf()для поиска NaN.
const array = [NaN];
array.indexOf(NaN); // -1

// Поиск всех вхождений элемента
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]