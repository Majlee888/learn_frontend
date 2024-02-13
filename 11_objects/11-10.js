// *** Задача 11.10 ***

//     Даны два массива, в первом перечислены по порядку названия фильмов, во втором - режиссёры этих фильмов.
//  Написать функцию, которая будет принимать эти два массива,
//     возвращать массив объектов со свойствами: название фильма и режиссёр.

///let newArray = movieTitles.concat(movieDirectors);
///const newObj = newArray(element) => (`title: ${element}`)
///console.log(newObj);


function mergeArrays(arr1, arr2) {
    const mergedArray = [];

    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push({ title: arr1[i], director: arr2[i] });
    }

    return mergedArray;
}
const mergedMovies = mergeArrays(movieTitles, movieDirectors);
console.log(mergedMovies);
