"use strict"

let numberOffFilms = +prompt("Count of films", "");
let personalMovieDB = {
    count : numberOffFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let movieName = prompt("Movie name", "");
let movieBal = prompt("Movie ball", "");
let movieName1 = prompt("Movie name", "");
let movieBal1 = prompt("Movie ball", "");

personalMovieDB.movies[movieName] = movieBal;
personalMovieDB.movies[movieName1] = movieBal1;
console.log(personalMovieDB);