"use strict";

if (1){
    console.log("Ok!");
} else {
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Too much");
} else {
    console.log("ok");
}

const num2 = 50;
// тернарный оператор!
//               вернет при истине    вернет если ложь      
let ternaryCond = (num2 === 50) ? console.log("Ok!!!!") : console.log("Error!!!"); 


// конструкция switch всегда используется только СТРОГОЕ СРАВНЕНИЕ!
// break ставить обязательно!
const num3 = "50";

switch (num) {
    case 49:
        console.log('Wrong!');
        break;
    case 100:
        console.log("Wrong 100!");
        break;
    case 50:
        console.log("Верно!");
        break;   
    default:
        // если ни одно из условий не выполнилось!
        console.log("Не в этот раз!");
        break;

}
