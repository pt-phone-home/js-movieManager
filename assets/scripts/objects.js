// const userChosenKeyName = "level"; // this is hard coded by imagine this is entered by a user so we don't know that it will be 'level' in advance

// const person = {
//     name: "Peter",
//     age: 38,
//     hobbies: ["writing songs", "coding"],
//     greet: function() {
//         console.log("Hi There");
//     },
//     [userChosenKeyName]: "...",
//     "favourite colour": "blue", // strings can be used for key names
//     1.5: "hello",
//     children: 5
// };

// person.isAdmin = true;
// person.lastName = "Tiernan";

// delete person.age; // Deletes any property from the object.
// const storedKeyNameValue = "children";

// console.log(person.greet());
// console.log(person);
// console.log(person["favourite colour"]);
// console.log(person[1.5]);
// console.log(person[storedKeyNameValue]);

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");
const movies = [];

// Functions

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement("li");
    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    let text = getFormattedTitle.call(movie);
    +" - ";
    for (const key in info) {
      if (key !== "title" && key !== "_title") {
        text += ` ${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHander = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (extraName.trim() === "" || extraValue === "") {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT_TITLE";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  console.log(newMovie.info.title);

  movies.push(newMovie);
  console.log(movies);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};
// EVENTS

addMovieBtn.addEventListener("click", addMovieHander);
searchBtn.addEventListener("click", searchMovieHandler);
