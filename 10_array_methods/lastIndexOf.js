// Метод lastIndexOf()экземпляров Arrayвозвращает последний индекс, по которому данный элемент может быть найден в массиве, или - 1, если он отсутствует. 
// Массив ищется в обратном направлении, начиная с fromIndex.
// Метод lastIndexOf()сравнивается searchElementс элементами массива, используя строгое равенство(тот же алгоритм, который используется оператором ===).
//  NaNзначения никогда не сравниваются как равные, поэтому lastIndexOf()всегда возвращается, -1когда searchElementесть NaN.

// Метод lastIndexOf()пропускает пустые места в разреженных массивах.

// Метод lastIndexOf()является универсальным.Он ожидает только, thisчто значение будет иметь lengthсвойство и свойства с целочисленным ключом.

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// Expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// Expected output: 1


// В следующем примере используется lastIndexOf()поиск значений в массиве.
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3

// Вы не можете использовать lastIndexOf()для поиска NaN.
const array = [NaN];
array.lastIndexOf(NaN); // -1

// В следующем примере используется lastIndexOfпоиск всех индексов элемента в заданном массиве и push()добавление их в другой массив по мере их обнаружения.
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]