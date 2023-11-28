// Метод findLast()экземпляров Arrayвыполняет итерацию массива в обратном порядке и возвращает значение первого элемента, 
// удовлетворяющего предоставленной функции тестирования. Если ни один элемент не удовлетворяет функции тестирования, undefinedвозвращается.

// Если вам нужно найти:

// первый соответствующий элемент, используйте .find()
// индекс последнего соответствующего элемента в массиве, используйтеfindLastIndex() .
// индекс значения , используйте indexOf(). (Он похож на findIndex(), 
// но проверяет каждый элемент на равенство значению вместо использования функции тестирования.)
// существует ли значение в массиве, используйте includes().
//  Опять же, он проверяет каждый элемент на равенство значению вместо использования функции тестирования.
// если какой-либо элемент удовлетворяет предоставленной функции тестирования, используйте some().

// Метод findLast()является итеративным . Он вызывает предоставленную callbackFnфункцию один раз для каждого элемента массива в порядке убывания индекса, 
// пока callbackFnне вернет истинное значение. findLast()затем возвращает этот элемент и прекращает перебор массива. 
// Если callbackFnникогда не возвращает истинное значение, findLast()возвращает undefined.

// callbackFnвызывается для каждого индекса массива, а не только для тех, которым присвоены значения. 
// Пустые слоты в разреженных массивах ведут себя так же, как и undefined.

// findLast()не изменяет массив, в котором он вызывается, но функция предоставляется как callbackFnможет. 
// Однако обратите внимание, что длина массива сохраняется до первого вызова callbackFn. Поэтому:

// callbackFnне будет посещать какие-либо элементы, добавленные за пределы начальной длины массива, когда findLast()начался вызов.
// Изменения в уже посещенных индексах не приводят callbackFnк их повторному вызову.
// Если существующий, еще не посещенный элемент массива изменен callbackFn, его значение, 
// переданное в callbackFn будет значением на момент посещения этого элемента. Удаленные элементы посещаются так, как если бы они были undefined.

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130


// В следующем примере возвращается последний элемент массива, который является простым числом или undefinedпростое число отсутствует.
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

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
