//Задание 1
let number = 5;
let stringOne = 'I am working here over';
let stringTwo = 'years';
let boolean = false;
let booleanTwo = true;
let nothing = null;
let strNumb = '6'
let strNumbTwo = '3'
console.log('Задание №1')
// Числовой тип приведём к строковому, добавив его к строке
console.log(stringOne + ' ' + number + ' ' + stringTwo);
// Преобразуем логический тип в числовой
console.log(+boolean);
// Преобразуем логический тип в числовой и сложим с числом
console.log(number + booleanTwo);
//Преобразуем null к числу
console.log(+nothing)
//Преобразуем строку к числу
console.log(strNumb / strNumbTwo)
console.log(Number(strNumbTwo))
//Для сравнения - число в виде строки
console.log(strNumbTwo)
//Преобразуем строку в Nan
console.log(Number(stringOne))
//Деление логических типов даст число
console.log(boolean / booleanTwo)

//Задание 2
console.log('Задание №2')
let a = 5
console.log('Сторна а = ', a)
let b = 2
console.log('Сторна b = ', b)
let p = a * 2 + b * 2 
console.log('Периметр = ', p)
let s = a * b
console.log('Площадь = ', s)

//Задание 3
console.log('Задание №3')
let cel = 25
let fahr = 65
let celToFahr = cel * 1.8 + 32
let fahrToCel = (fahr - 32) / 1.8
console.log(`${cel}\u00B0 C соответствует ${celToFahr}\u00B0 F`)
console.log(`${fahr}\u00B0 F соответствует ${fahrToCel}\u00B0 C`)

//Задание 4
let year = prompt('Введите год')
alert( (year % 4 != 0) ? 'Год не высокостный' : (year % 100 == 0) ? 'Столетие' : 'Высокостный')

//Задание 5
console.log('ЗАдание №5')
let one = Number(prompt('Введите первое число'))
let two = Number(prompt('Введите второе число'))
if (one == 10 || two == 10 || one + two == 10){
    alert('Проверка пройдена');
} else{
    alert('Проверка не пройдена');
}
