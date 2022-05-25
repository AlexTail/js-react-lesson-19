const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const nameLastMovie = prompt("Последний фильм?", ""),
    yourMarkLastMovie = +prompt("Ваша оценка пследнего фильма?", ""),
    nameLastMovie2 = prompt("Последний фильм?", ""),
    yourMarkLastMovie2 = +prompt("Ваша оценка пследнего фильма?", "");

// тут использовать [] т.к. через ТЧК может не работать
personalMovieDB.movies[nameLastMovie] = yourMarkLastMovie,
    personalMovieDB.movies[nameLastMovie2] = yourMarkLastMovie2;

console.log(personalMovieDB.movies);

console.log(personalMovieDB);