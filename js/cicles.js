"use strict";

let num = 50;

// while делай пока условие выполняется
while (num <= 55) {
    console.log(num);
    num++;
}


// цикл с постусловием
do {
    console.log(num);
    num++;
}
while (num < 55);

// цикл for
//  создаем итератор условие выхода из цикла и шаг
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

// закончить цикл досрочно:
for (let i = 1; i < 0; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}
