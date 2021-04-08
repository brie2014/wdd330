import Books from './booksModel.js';
import BooksView from './booksView.js';

// Book controller
export default class BooksController {
  constructor(parent) {
    this.parent = parent;
    //add model and view right into the class as members so I can use all their stuff
    this.books = new Books();
    this.booksView = new BooksView();
  }

  //render saved booklist and add listeners to their buttons
  async init() {
    this.booksView.rendersavedBookList();
    this.addDeleteListener('.deleteBtn');
    this.addSaveListener('.saveBtn');
    this.addViewMore('.viewMore');
  }

  async searchBooks() {
    this.parentElement = document.querySelector(this.parent);
    //set loading message
    this.parentElement.innerHTML = '<div class="loader"></div>';

    // get the list of books matching search terms (MODEL)
    const bookSearch = await this.books.searchBooks();

    //clear loading message and render list to document
    this.parentElement.innerHTML = '';
    this.booksView.renderBookList(bookSearch, this.parentElement);

    // add listeners to all the buttons
    this.init();
  }

  //add listeners to each save button
  async addSaveListener(q) {
    const buttons = document.querySelectorAll(q);
    buttons.forEach(button => {
      button.onclick = e => {
        this.books.saveBook(button.parentElement.parentElement, 'savedBooks');
        this.init();
        button.classList.add('clickedBtn');
      }
    });
  }

  //add listeners to each delete button
  async addDeleteListener(q) {
    const buttons = document.querySelectorAll(q);
    buttons.forEach(button => {
      button.onclick = e => {
        this.books.deleteBook(button.parentElement.parentElement, 'savedBooks');
        this.init();
      }
    });
  }

  //add listeners to each view more button
  async addViewMore(q) {
    const views = document.querySelectorAll(q);
    views.forEach(view => {
      view.onclick = e => {
        view.nextElementSibling.classList.toggle('hidden');
        if (view.innerHTML == 'Hide Description') {
          view.innerHTML = "Show Description"
        }
        else {
          view.innerHTML = "Hide Description"
        }
      }
    });
  }

}

