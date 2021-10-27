"use strict";


let numberOfFilms;
// console.log(numberOfFilms);

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", ''); 
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель!");  
    } else if (personalMovieDB.count >= 30){
        alert("Вы киноман!");
    } else {
        alert("Произошла ошибка!");
    }
}

detectPersonalLevel();

// console.log(personalMovieDB);
// hidden это шаблон поведения функции
function showMyDB (hidden) {
    // если св-во privat == false , !  превращаем его в true и распечатываем
    // privat = false если наша БД не является скрытой
    if (!hidden) {
        console.log(personalMovieDB);  
    }
}



function writeYourGenres () {
    // let myLikedGenre;
    for (let index = 1; index <= 3; index++) {
        personalMovieDB.genres[index-1] =  prompt(`Ваш любимый жанр под номером ${index}?`);
    }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);