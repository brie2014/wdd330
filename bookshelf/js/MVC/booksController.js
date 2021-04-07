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

  async init() {
    this.booksView.rendersavedBookList();
    this.addDeleteListener('.deleteBtn');
    this.addViewMore('.viewMore');
  }

  async searchBooks() {
    this.parentElement = document.querySelector(this.parent);
    //set loading message
    this.parentElement.innerHTML = '<div>Loading...</div>';

    // get the list of books matching search terms (MODEL)
    const bookSearch = await this.books.searchBooks();

    // render the list to html (VIEW)
    this.parentElement.innerHTML = '';
    this.booksView.renderBookList(bookSearch, this.parentElement);

    // add listeners to all the buttons
    this.addSaveListener('.saveBtn');
    this.addViewMore('.viewMore')

  }

    //add listener to each save button
    async addSaveListener(q) {
      const buttons = document.querySelectorAll(q);
      buttons.forEach(button => {
        button.addEventListener('click', e => {
          this.books.saveBook(button.parentElement.parentElement, 'savedBooks');
          this.booksView.rendersavedBookList();
          
        });
        button.addEventListener('click', e => {
          button.classList.add('clickedBtn');
          button.innerHTML = 'Saved!'
        });
        this.addDeleteListener('.deleteBtn');
          this.addViewMore('.viewMore');
      });

    }
  
    //add listener to each delete button
    async addDeleteListener(q) {
      const buttons = document.querySelectorAll(q);
      buttons.forEach(card => {
        card.addEventListener('click', () => {
          this.books.deleteBook(card.parentElement.parentElement, 'savedBooks');
          this.booksView.rendersavedBookList();
          //this.addDeleteListener('.deleteBtn');
          //this.addViewMore('.viewMore');
        });
        this.addDeleteListener('.deleteBtn');
          this.addViewMore('.viewMore');
      });
    }

     //add listener to each view more button
     async addViewMore(q) {
      const views = document.querySelectorAll(q);
      views.forEach(view => {
        view.addEventListener('click', () => {
          view.nextElementSibling.classList.toggle('hidden');
          if (view.innerHTML == 'Hide Description') {
            view.innerHTML = "Show Description"
          }
          else {
            view.innerHTML = "Hide Description"
          }
          
        });
      });
    }

    
    //Save book to local storage
    async saveBook(item, location) {
      this.savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
      const newBook = {
          id: item.id,
          content: item.innerHTML,
      };
      this.savedBooks.push(newBook);
      localStorage.setItem(location, JSON.stringify(this.savedBooks));
      //this.rendersavedBookList();
        //this.addDeleteListener('.deleteBtn');
        //this.addViewMore('.viewMore');
  }

  //Delete book from localstorage
  async deleteBook(item, location) {
    this.savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
      let book = item;
      let idToRemove = book.getAttribute('id');
      let newSavedBooks = this.savedBooks.filter(books => books.id != idToRemove)
      localStorage.setItem(location, JSON.stringify(newSavedBooks));
      //this.rendersavedBookList();
        //this.addDeleteListener('.deleteBtn');
        //this.addViewMore('.viewMore');

  }
  

}

