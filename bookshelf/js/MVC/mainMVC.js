import BooksController from './booksController.js';
import {toggleOptions, toggleBookListSmall} from './utilities.js'

let searchBtn = document.getElementById("search");
let advancedBtn = document.getElementById("dropdown-btn");
let savedBtn = document.getElementById("reading-list-btn");

window.addEventListener("load", () => {
    const Book = new BooksController('.results');
    Book.init();
    searchBtn.addEventListener("click", () => {
        Book.searchBooks()
    })
})

advancedBtn.addEventListener("click", toggleOptions);
window.addEventListener("resize", toggleBookListSmall);






/*
Pagination of results
fix view more button and listeners
add more filters
whack-a-mole game
fix SWAPI
*/
