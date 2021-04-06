import BooksController from './booksController.js';

let searchBtn = document.getElementById("search");
let advancedBtn = document.getElementById("dropdown-btn");
let savedBtn = document.getElementById("reading-list-btn");

advancedBtn.addEventListener("click", toggleNav);
savedBtn.addEventListener("click", toggleBookList);

window.addEventListener("load", () => {
    const Book = new BooksController('.results');
    Book.booksView.rendersavedBookList();
    searchBtn.addEventListener("click", () => {
        Book.init()
    })

})


//Toggle Functions to show/hide content
function toggleNav() {
    var updateElement = document.getElementById("filter-list"); updateElement.classList.toggle("hidden");
}

function toggleBookList() {
    var updateElement = document.getElementById("saved"); updateElement.classList.toggle("hidden");
}
