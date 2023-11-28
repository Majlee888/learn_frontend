// Метод filter()экземпляров Arrayсоздает неглубокую копию части данного массива, отфильтрованную до тех элементов данного массива, которые прошли тест,
//     реализованный предоставленной функцией.
// Метод filter()является итеративным.Он вызывает предоставленную callbackFnфункцию один раз для каждого элемента массива и создает новый массив
// из всех значений, для которого callbackFnвозвращается истинное значение.
// Элементы массива, не прошедшие проверку, callbackFnне включаются в новый массив.
// callbackFnвызывается только для индексов массива, которым присвоены значения.Он не вызывается для пустых ячеек в разреженных массивах.

// В следующем примере используется filter()создание отфильтрованного массива, из которого удалены все элементы со значениями меньше 10.

function isBigEnough(value) {
    return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]


//   Следующий пример возвращает все простые числа в массиве:
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]