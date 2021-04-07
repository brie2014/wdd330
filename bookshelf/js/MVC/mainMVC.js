import BooksController from './booksController.js';
import {toggleOptions, toggleBookListSmall, toggleBookList} from './utilities.js'

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
savedBtn.addEventListener("click", toggleBookList)
window.addEventListener("load", toggleBookListSmall);
window.addEventListener("resize", toggleBookListSmall);


/*
whack-a-mole game
fix SWAPI
*/
