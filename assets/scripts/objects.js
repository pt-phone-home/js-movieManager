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

const addMovieHander = () => {
    const title = document.getElementById("title").value;
    const extraName = document.getElementById("extra-name").value;
    const extraValue = document.getElementById("extra-value").value;

    if (title.trim() === "" || extraName.trim() === "" || extraValue === "") {
        return;
    }

    const newMovie = {
        info: {
            title: title,
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(newMovie);
    console.log(movies);
};

// EVENTS

addMovieBtn.addEventListener("click", addMovieHander);
