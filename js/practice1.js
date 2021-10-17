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


let recentFilm = prompt("Один из последних просмотренных фильмов?", "Moby"),
    markFilm = prompt("На сколько оцените его?");

let recentFilm2 = prompt("Один из последних просмотренных фильмов?", "Moby"),
    markFilm2 = prompt("На сколько оцените его?");

// во избежание багов в браузере или кириллицы в ответах пользователя к экземляру
//  объекта movies стоит обращаться через []
personalMovieDB.movies[recentFilm] = markFilm;
personalMovieDB.movies[recentFilm2] = markFilm2;

console.log(personalMovieDB);