"use strict";


function first() {

    // do smth 
    setTimeout(function(){
        console.log(1);        
    },500);
}

function second() {
    console.log(2);
}

// если ф-ии стоят одна за другой это не значит что они выполняется также по порядку (дадут результат)
//  -- может быть задержка
// first();
// callback ф-ия это такая ф-ия которая должна выполнится после другой ф-ии которая завершила свое выполнение
// second();

// это пример callback ф-ии внутри в качестве аргумента передается ф-ии
function learnJS(lang, callback){
    console.log(`I learn ${lang}`);
    callback();
}

// learnJS("JavaScript", function() {
//     console.log("Я прошел этот урок!");

// });

function done() {
    console.log("I am done this lesson!");
}


// callback передается просто done, мы просто передаем эту функцию для того чтобы далее использовать!
// но не вызываем!! оно вызывается дальше
learnJS("JavaScript", done);

// уолбжк дает нам уверенность в том что код не начнет исполнение, пока другой код не завершится 