let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='

let container = document.querySelector('#container');
container.classList.add('hidden');

let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
let genre = document.querySelector('#genre');
let actors = document.querySelector('#actors');
let directors = document.querySelector('#directors');
let date = document.querySelector('#date');
let awards = document.querySelector('#awards');
let collection = document.querySelector('#collection');
let languages = document.querySelector('#languages');
let ratings = document.querySelector('#ratings');
let poster = document.querySelector('#poster');
let error = document.querySelector('#error');
let suggestion = document.querySelector('.suggestion');

function search() {
    let movieInput = document.querySelector('#movieName');
    let query = api + movieInput.value;
    fetch(query).then(data => data.json()).then(data => {
        error.innerText = "";
        container.classList.add('hidden');
        console.log(data);
        if(data.Error === 'Movie not found!') {
            error.innerText = data.Error;
        }
        else {
            container.classList.remove('hidden');
            title.innerText = data.Title;
            desc.innerText = data.Plot;
            genre.innerText = data.Genre;
            actors.innerText = data.Actors;
            directors.innerText = data.Director;
            date.innerText = data.Released;
            awards.innerText = data.Awards;
            collection.innerText = data.BoxOffice;
            languages.innerText = data.Language;
            ratings.innerText = data.imdbRating;
            poster.src = data.Poster;

            if(data.imdbRating > 7)
            {
                suggestion.innerText = "Worth watching!";
                suggestion.style.background = 'rgb(81, 199, 81)';
                suggestion.style.color = 'rgb(9, 50, 9)';
            }
            else if(data.imdbRating > 6 && data.imdbRating < 7)
            {
                suggestion.innerText = "Can watch!";
                suggestion.style.background = 'rgb(255, 245, 229)';
                suggestion.style.color = 'rgb(68, 43, 0)';
            }
            else {
                suggestion.innerText = "Waste of time!";
                suggestion.style.background = 'rgb(188, 88, 88)';
                suggestion.style.color = 'rgb(71, 9, 9)';
            }
        }
    });
}