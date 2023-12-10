// Метод массива .every() позволяет узнать, удовлетворяют ли все элементы в массиве условию в функции-колбэке. Результатом вызова метода .every() 
// будет boolean-значение true или false. Если хотя бы один элемент не будет удовлетворять условию, то результат будет false.


// Метод every()является итеративным . Он вызывает предоставленную callbackFnфункцию один раз для каждого элемента массива,
// пока она callbackFnне вернет ложное значение. Если такой элемент найден, every()немедленно возвращается falseи прекращает обход массива.
// В противном случае, если callbackFnвозвращает истинное значение для всех элементов, every()возвращается true.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

// В следующем примере проверяется, имеют ли все элементы массива значение 10 или больше.
function isBigEnough(element, index, array) {
    return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true


// В следующем примере проверяется, присутствуют ли все элементы массива в другом массиве.
const isSubset = (array1, array2) =>
    array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false