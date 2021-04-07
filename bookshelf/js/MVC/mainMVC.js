import BooksController from './booksController.js';
import {toggleOptions, toggleBookListSmall} from './utilities.js'

let searchBtn = document.getElementById("search");
let advancedBtn = document.getElementById("dropdown-btn");

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
whack-a-mole game
fix SWAPI
*/
