// Метод reverse()экземпляров Arrayпереворачивает массив на место и возвращает ссылку на тот же массив,
//     причем первый элемент массива теперь становится последним, а последний элемент массива становится первым.
// Другими словами, порядок элементов в массиве будет изменен в сторону, противоположную указанной ранее.

// Чтобы перевернуть элементы массива без изменения исходного массива, используйте toReversed().
// Метод reverse()перемещает элементы вызывающего объекта массива на место, изменяя массив и возвращая ссылку на массив.

// Метод reverse()сохраняет пустые слоты. Если исходный массив разреженный , соответствующие новые индексы пустых слотов удаляются и также становятся пустыми
//  слотами.

// Метод reverse()является универсальным . Он ожидает только, thisчто значение будет иметь lengthсвойство и свойства с целочисленным ключом.
// Хотя строки также подобны массивам, этот метод не подходит для применения к ним, поскольку строки неизменяемы.

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


// В следующем примере создается массив items, содержащий три элемента, а затем он переворачивается.
// Вызов reverse()возвращает ссылку на перевернутый массив items.
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]

// Метод reverse()возвращает ссылку на исходный массив, поэтому изменение возвращаемого массива также приведет к изменению исходного массива.
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5


// Если вы хотите reverse()не изменять исходный массив, а возвращать неполную копию массива, как map()это делают другие методы массива (например, ),
// используйте toReversed()метод. В качестве альтернативы вы можете выполнить поверхностное копирование перед вызовом reverse(),
// используя синтаксис расширения или Array.from().
const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
