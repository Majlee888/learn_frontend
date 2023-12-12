// Дан массив чисел.Необходимо создать новый массив, в котором будут содержаться только однозначные числа.


const arr = [1, 4, -32, -5, 64, 743];

const newArr = arr.filter(myCallback);

function myCallback(element) {
    if (element > -10 && element < 10) {
        return true;
    } else {
        return false;
    }
}
console.log(newArr);

//output
//[1, 4, -5]
//   Создание колбэк функции стрелочным способом

const arr = [1, 4, -32, -5, 64, 743];

const newArr = arr.filter((element) => {
    if (element > -10 && element < 10) {
        return true;
    } else {
        return false;
    }
});

console.log(newArr);

