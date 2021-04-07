import BooksController from './booksController.js';

let searchBtn = document.getElementById("search");
let advancedBtn = document.getElementById("dropdown-btn");
let savedBtn = document.getElementById("reading-list-btn");

window.addEventListener("load", () => {
    const Book = new BooksController('.results');
    Book.booksView.rendersavedBookList();
    Book.addDeleteListener('.deleteBtn');
    searchBtn.addEventListener("click", () => {
        Book.init()
    })

})

advancedBtn.addEventListener("click", toggleNav);
savedBtn.addEventListener("click", toggleBookList);

//Toggle Functions to show/hide content
function toggleNav() {
    var updateElement = document.getElementById("filter-list"); 
    updateElement.classList.toggle("hidden");
}

function toggleBookList() {
    var updateElement = document.getElementById("saved"); 
    updateElement.classList.toggle("hidden");
}
