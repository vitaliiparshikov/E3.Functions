function getNumbers(num) {
    let getBasic, result;
    getBasic = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                getBasic = false;
            }
        }
        result = getBasic ? 'Число ${num} - простое число' : 'Число ${num} - составное число';
    } else if (num > 1000) {
        result = 'Ошибка';
    }
    return result;
}
getNumbers();