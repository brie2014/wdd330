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

/*
Fix delete glitch where it doesn't delete out of local storage
Pagination of results
fix saved books to left and querySelectorAll
#leftCol {
    position: fixed;
    width: 150px;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
}
style buttons better
style bookcards
hover and click effects
fix sizing
style advanced search options
add more filters
whack-a-mole game
fix SWAPI
*/
