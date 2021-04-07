import BooksController from './booksController.js';
import {toggleOptions, toggleBookList} from './utilities.js'

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
savedBtn.addEventListener("click", toggleBookList);
