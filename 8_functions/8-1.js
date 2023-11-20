// 8.1 Написать функцию, получающую на вход одно число. Если число чётное - функция возвращает true , если нет - false. 


function number(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(number(4));
