// Даны два массива. Написать функцию, которая будет из первого массива удалять все значения второго, возвращая новый массив. Порядок оставшихся элементов должен сохраняться.
// const arr = arrayDiff([1, 2], [1]);
// console.log(arr); // [2]

// const arr2 = arrayDiff([1, 2, 2, 4, 4, 3], [2, 4]);
// console.log(arr2); // [1, 3]


let arr1 = [1, 2, 2, 4, 4, 3];
let arr2 = [2, 4];
const diffArr = arrayDiff(arr1, arr2);

//[2, 4].includes(3) = false
//[2, 4].includes(2) = true

function arrayDiff(array1, array2) {
    let newArr = []; // 0.
    for (let i = 0; i < array1.length; i++) { //1.
        if (array2.includes(array1[i]) === false) { //2.
            newArr.push(array1[i]); //3.
            // тут мы должны помещать элемент в новый массив, если этого элемента нет во 2-м массиве
        }

    } //4.

    return newArr; //5.
}
console.log(diffArr);


