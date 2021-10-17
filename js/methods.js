"use strict";

const str = "test";
// св-ва вызывают без скобок
console.log(str.length);

const arr = [1, 2, 3];
// св-ва вызывают без скобок
console.log(arr.length);

// методы вызывают со скобками!
console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";

// первая позиция вхождения слова fruit, если строка не найдена вернет -1 
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("1"));


// 3 метода модификации строк!

const logg = "Hello";

// сделать срез с начала до конца( до но не включая)
// hell
console.log(logg.slice(0,4));
// ello
console.log(logg.slice(1));


// c конца строки!
// ll
console.log(logg.slice(-3,-1));


// substring нельзя считать в обратную сторону!
//  с какого индекса начать и до какого (не включая считать)
const logg2 = "Hello world!";
// world
console.log(logg2.substring(6, 11));

// substr говорит с какой позиции начать и КАКОЕ КОЛИЧЕСТВО СИМВОЛОВ НЕОБХОДИМО ВЫРЕЗАТЬ!
// world
console.log(logg2.substr(6, 5));

// Math  -- library for Number

const num = 12.2;
// округляем числа
console.log(Math.round(num));


const test = "12.2px";
// переводит число в другую систему счисления! но также может преобразовать из строки в число
console.log(parseInt(test));

// переводит в десятичную систему с плавающей точкой
console.log(parseFloat(test));