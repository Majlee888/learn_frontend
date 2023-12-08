// Статический Array.isArray()метод определяет, является ли переданное значение расширением Array.
// Array.isArray()проверяет, является ли переданное значение Array. Он не проверяет цепочку прототипов значения и не полагается на Arrayконструктор,
// к которому он прикреплен. Он возвращает trueлюбое значение, созданное с использованием синтаксиса литерала массива или Arrayконструктора.
// Это делает его безопасным для использования с объектами из разных областей, где идентификатор конструктора Arrayотличается и,
// следовательно, может привести instanceof Arrayк сбою.

console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false