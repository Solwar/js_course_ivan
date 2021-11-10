"use strict";
// not preffered method for create objects:
// const obj = new Object(); 


const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // создаем свой метод:
    makeTest: function() {
        console.log("Test");
    }
};

// вызываем наш метод:
options.makeTest(); //Test

// console.log(options.name);

// deleting object atributes 
// delete options.name;

// console.log(options);
// прямых констант в JS нет!

// console.log(options["colors"]["border"]); //black
// preffered:
// console.log(options.colors.border); // black

// перебор объектов

// 
// let counter = 0;

// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         // то перебираем colors
//         for (let i in options[key]) {
//             console.log(`Св-во: ${i}, имеет значение ${options[key][i]}`);
//             // объекты со всех уровней (толькео подуровневые св-ва)
//             // counter++;
//         }
//     } else {
//         console.log(`Св-во: ${key}, имеет значение ${options[key]}`);
//         // объекты со всех уровней (верхний уровень без учета самого colors)
//         // counter++;
//     }
//     // кол-во верхнеуровневых объектов:
//     counter++; //4
// }
// // вывести кол-во объектов в массиве
// console.log(counter);
// // сейчас все значения выводятся ввиде строк, [object Object] 
// // это строковое представление объекта (jS не может вывести корректно в строку)


// // объекты нельзя итерировать через of


// метод object.keys берет из объекта все ключи и создает из них массив

console.log(Object.keys(options)); //[ 'name', 'width', 'height', 'colors' ]
console.log(Object.keys(options).length); // сама длинна массива



let user = {
    name: "Ivan",
    surname: "Ivanov",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

console.log(user.fullName);
user.fullName = "Galina Petrova";
console.log(user.fullName);
