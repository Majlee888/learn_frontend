// Метод slice()экземпляров Arrayвозвращает неглубокую копию части массива в новый объект массива, выбранный из startдо end(endне включен),
//     где startи endпредставляет индекс элементов в этом массиве.
// Исходный массив не будет изменен.
// Метод slice()является методом копирования.Он не изменяет this, а вместо этого возвращает неглубокую копию, содержащую некоторые из тех же элементов, что и элементы исходного массива.

// Метод slice()сохраняет пустые слоты.Если нарезанная часть разрежена, возвращаемый массив также будет разреженным.

// Метод slice()является универсальным.Он ожидает только, thisчто значение будет иметь lengthсвойство и свойства с целочисленным ключом.

//     Индекс, отсчитываемый от нуля, с которого начинается извлечение, преобразованный в целое число.

// Отрицательный индекс отсчитывается от конца массива — если start < 0используется start + array.length.
// Если start < -array.lengthили startопущено, 0используется.
// Если start >= array.length, ничего не извлекается.

//     Индекс, отсчитываемый от нуля, для завершения извлечения, преобразованный в целое число.slice()извлекает до, но не включая end.

// Отрицательный индекс отсчитывается от конца массива — если end < 0используется end + array.length.
// Если end < -array.length, 0используется.
// Если end >= array.lengthили endопущено, array.lengthиспользуется, в результате чего извлекаются все элементы до конца.
// Если endон расположен до или startпосле нормализации, ничего не извлекается.

// Возвращаемое значение
// Новый массив, содержащий извлеченные элементы.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// Вернуть часть существующего массива
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

