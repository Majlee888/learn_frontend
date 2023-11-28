// Метод forEach()экземпляров Arrayвыполняет предоставленную функцию один раз для каждого элемента массива.
// Метод forEach()является итеративным . Он вызывает предоставленную callbackFnфункцию один раз для каждого элемента массива в порядке возрастания индекса.
// В отличие от map(), forEach()всегда возвращает undefinedи не может быть объединен в цепочку.
// Типичный вариант использования — выполнение побочных эффектов в конце цепочки.

// callbackFnвызывается только для индексов массива, которым присвоены значения. Он не вызывается для пустых ячеек в разреженных массивах .

// forEach()не изменяет массив, в котором он вызывается, но функция предоставляется как callbackFnможет.
// Однако обратите внимание, что длина массива сохраняется до первого вызова callbackFn. Поэтому:

// callbackFnне будет посещать какие-либо элементы, добавленные за пределы начальной длины массива, когда forEach()начался вызов.
// Изменения в уже посещенных индексах не приводят callbackFnк их повторному вызову.
// Если существующий, еще не посещенный элемент массива изменен callbackFn, его значение,
// переданное в, callbackFnбудет значением на момент посещения этого элемента. Удаленные элементы не посещаются.

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
    sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0

// Использование forEach() для разреженных массивов
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
    console.log({ element });
    numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }