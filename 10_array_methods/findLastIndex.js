// Метод findLastIndex()экземпляров Arrayвыполняет итерацию массива в обратном порядке и возвращает индекс первого элемента,
//     который удовлетворяет предоставленной функции тестирования.Если ни один элемент не удовлетворяет функции тестирования, возвращается - 1.

// См.также findLast()метод, который возвращает значение последнего элемента, удовлетворяющего функции тестирования(а не его индекс).
// Метод findLastIndex()является итеративным .
// Он вызывает предоставленную callbackFnфункцию один раз для каждого элемента массива в порядке убывания индекса, пока callbackFnне вернет истинное значение.
// findLastIndex()затем возвращает индекс этого элемента и прекращает перебор массива.
// Если callbackFnникогда не возвращает истинное значение, findLastIndex()возвращает -1.

// callbackFnвызывается для каждого индекса массива, а не только для тех, которым присвоены значения.
// Пустые слоты в разреженных массивах ведут себя так же, как и undefined.

// findLastIndex()не изменяет массив, в котором он вызывается, но функция предоставляется как callbackFnможет.
// Однако обратите внимание, что длина массива сохраняется до первого вызова callbackFn. Поэтому:

// callbackFnне будет посещать какие-либо элементы, добавленные за пределы начальной длины массива, когда findLastIndex()начался вызов.
// Изменения в уже посещенных индексах не приводят callbackFnк их повторному вызову.
// Если существующий, еще не посещенный элемент массива изменен callbackFn, его значение,
// переданное в, callbackFnбудет значением на момент посещения этого элемента. Удаленные элементы посещаются так, как если бы они были undefined.

const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130



// В следующем примере возвращается индекс последнего элемента массива, который является простым числом или -1если простое число отсутствует.
function isPrime(element) {
    if (element % 2 === 0 || element < 2) {
        return false;
    }
    for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
        if (element % factor === 0) {
            return false;
        }
    }
    return true;
}

console.log([4, 6, 8, 12].findLastIndex(isPrime)); // -1, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLastIndex(isPrime)); // 5