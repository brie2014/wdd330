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

    // add a listener to each button
    this.addSaveListener('.saveBtn');

    //this.rendersavedBookList();

  }

    //add event listener to each book
    async addSaveListener(q) {
      const buttons = document.querySelectorAll(q);
      buttons.forEach(button => {
        button.addEventListener('click', e => {
          this.saveBook(button.parentElement.parentElement, 'savedBooks');
        });
        button.addEventListener('click', e => {
          button.classList.add('clickedBtn');
          button.innerHTML = 'Saved!'
        });
      });
    }
  
    //add event listener to each book
    async addDeleteListener(q) {
      const buttons = document.querySelectorAll(q);
      buttons.forEach(card => {
        card.addEventListener('click', () => {
          this.deleteBook(card.parentElement.parentElement, 'savedBooks');
        });
      });
    }
  

  //Save book to local storage
  async saveBook(item, location) {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
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
    this.addDeleteListener('.deleteBtn');
    //console.log(savedBooks);
    //bookList.innerHTML = JSON.stringify(localStorage.getItem('savedBooks'));
  }

  async getBookInfo(book) {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    const bookList = document.getElementById('saved');

    savedBooks.forEach(book => {
      console.log(book.id);
      let bookInfo = this.filterBook(searchedBooks, book.id);
      savedBookCard(bookInfo, bookList);
    });
    /*.map(quake => {
        return `<li data-id=${quake.id}>
<div><strong>Location:</strong> ${quake.properties.title}</div> 
<div><strong>Date & Time:</strong> ${new Date(quake.properties.time)}</div>
</li>`;
    })
    .join('');*/
  }

  //Delete item from localstorage and list
  async deleteBook(item, location) {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    console.log(savedBooks);
    let book = item;
    let idToRemove = book.getAttribute('id');
    console.log(idToRemove);
    let newSavedBooks = savedBooks.filter(books => books.id != idToRemove)
    //item.remove();
    //savedBooks.splice(`${data}`, 1);
    localStorage.setItem(location, JSON.stringify(newSavedBooks));
    this.booksView.rendersavedBookList();
    this.addDeleteListener('.deleteBtn');
  }



  /*async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    var quakes = this.quakes.getQuakeById(quakeId);
    //console.log(quakes);
    this.quakesView.renderQuake(quakes, this.parentElement);
  }*/
}

