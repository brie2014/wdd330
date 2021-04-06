import { } from './booksAPI.js';
import Books from './booksModel.js';
import BooksView from './booksView.js';


// Book controller
export default class BooksController {
  constructor(parent) {
    this.parent = parent;
    //add model and view right into the class as members.
    this.books = new Books();
    this.booksView = new BooksView();
  }

  //add event listener to each book
  addSaveListener(q) {
    const buttons = document.querySelectorAll(q);
    const bookCards = Array.from(buttons);
    console.log(bookCards);
    bookCards.forEach(card => {
      console.log(card);
      card.addEventListener('click', e => {
        this.saveBook(card.parentElement.parentElement, 'savedBooks');
      });
    });
  }


  async init() {
    // use this as a place to grab the element identified by this.parent and display searched books by calling this.getBooks()
    this.parentElement = document.querySelector(this.parent);
    this.getBooks();

  }

  async getBooks() {
    //set loading message
    this.parentElement.innerHTML = '<div>Loading...</div>';

    // get the list of books matching search terms (MODEL)
    const bookSearch = await this.books.searchBooks();
    console.log(bookSearch);

    // render the list to html (VIEW)
    this.parentElement.innerHTML = '';
    this.booksView.renderBookList(bookSearch, this.parentElement);

    // add a listener to each book
    this.addSaveListener('.saveBtn');

    //this.rendersavedBookList();

  }

    //Save book to local storage
    async saveBook(item, location) {
      const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
      const bookList = document.querySelector('.saved');
      console.log(item)
      const newBook = {
        //title: item.volumeInfo.title,
        //author: item.volumeInfo.authors,
        //imageSource: item.volumeInfo.imageLinks.thumbnail,
        //category: item.volumeInfo.categories,
        //idType: item.volumeInfo.industryIdentifiers[0].type,
        //id: item.volumeInfo.industryIdentifiers[0].identifier
        id: item.id,
        content: item.innerHTML,
      };
      savedBooks.push(newBook);
      localStorage.setItem(location, JSON.stringify(savedBooks));
      this.booksView.rendersavedBookList();
      //console.log(savedBooks);
      //bookList.innerHTML = JSON.stringify(localStorage.getItem('savedBooks'));
    }




  /*async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    var quakes = this.quakes.getQuakeById(quakeId);
    //console.log(quakes);
    this.quakesView.renderQuake(quakes, this.parentElement);
  }*/
}

