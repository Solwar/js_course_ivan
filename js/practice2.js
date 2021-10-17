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
    const recentFilm = prompt("Один из последних просмотренных фильмов?", ""),
            markFilm = prompt("На сколько оцените его?");
    // если юзер нажимает отмену то получаем  null
    if (recentFilm != null && markFilm != null && recentFilm != "" && markFilm != "" && recentFilm.length < 50) {
        personalMovieDB.movies[recentFilm] = markFilm;
        console.log("done");
    } else {
        console.log("error");
        index--;
    }
    
}
// ПЕРЕПИСАТЬ ЦИКЛ ЕЩЕ ДВУМЯ СПОСОБАМИ


console.log(personalMovieDB);
if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель!");  
} else if (personalMovieDB.count >= 30){
    alert("Вы киноман!");
} else {
    alert("Произошла ошибка!");
}