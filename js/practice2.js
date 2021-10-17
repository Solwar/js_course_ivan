"use strict";


let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let index = 0; index < 2; index++) {
    const recentFilm = prompt("Один из последних просмотренных фильмов?", "Moby"),
    markFilm = prompt("На сколько оцените его?");
    personalMovieDB.movies[recentFilm] = markFilm;
    
}

let filmsCount = 0;

while (filmsCount < 2) {
    const recentFilm = prompt("Один из последних просмотренных фильмов?", "Moby"),
    markFilm = prompt("На сколько оцените его?");

    if (recentFilm.length > 50) {
        alert("Слишком длинное название фильма!");
    } else if (recentFilm.length === 0) {
        alert("Заполните название фильма!");
    } else if (recentFilm === undefined) {
        alert("Заполните название фильма!");
    } else if (recentFilm === " ") {
        alert("Заполните название фильма!");
    } else {
        personalMovieDB.movies[recentFilm] = markFilm;
        filmsCount++;
    }

    
}
// let recentFilm = prompt("Один из последних просмотренных фильмов?", "Moby"),
//     markFilm = prompt("На сколько оцените его?");

// let recentFilm2 = prompt("Один из последних просмотренных фильмов?", "Moby"),
//     markFilm2 = prompt("На сколько оцените его?");

// // во избежание багов в браузере или кириллицы в ответах пользователя к экземляру
// //  объекта movies стоит обращаться через []
// personalMovieDB.movies[recentFilm] = markFilm;
// personalMovieDB.movies[recentFilm2] = markFilm2;

console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель!");  
} else if (personalMovieDB.count > 30){
    alert("Вы киноман!");
} else {
    alert("Произошла ошибка!");
}