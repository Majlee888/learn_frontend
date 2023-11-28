// Метод shift()экземпляров Arrayудаляет первый элемент из массива и возвращает этот удаленный элемент.Этот метод изменяет длину массива.
// Метод shift()удаляет элемент с нулевым индексом и сдвигает значения последовательных индексов вниз, а затем возвращает удаленное значение.
// Если lengthсвойство равно 0, undefinedвозвращается.

// Поведение метода pop()аналогично методу shift(), но применяется к последнему элементу массива.

// Метод shift()является мутирующим методом . Он меняет длину и содержимое this. Если вы хотите, чтобы значение thisбыло таким же,
// но возвращало новый массив с удаленным первым элементом, вы можете использовать arr.slice(1)его.

// Метод shift()является универсальным . Он ожидает только, thisчто значение будет иметь lengthсвойство и свойства с целочисленным ключом.
// Хотя строки также подобны массивам, этот метод не подходит для применения к ним, поскольку строки неизменяемы.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


// Следующий код отображает myFishмассив до и после удаления его первого элемента. Он также отображает удаленный элемент:
const myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

const shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel

