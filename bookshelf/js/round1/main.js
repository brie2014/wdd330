/*
Pagination of results
*/

var results = document.getElementById("results");
let myKey = 'AIzaSyDPR8cteFuQVST1bDSeXmc42TCeWggqyxo';
let searchBtn = document.getElementById("search");
  
searchBtn.addEventListener("click", searchBooks);

function searchBooks() {
  let options = {method: 'GET'};
  let searchQ = searchBy();
  let filter = searchFilter();
  let query = document.getElementById("user-query").value;
  let url = `https://www.googleapis.com/books/v1/volumes?q=${searchQ}${query}${filter}&startIndex=0&maxResults=5&key=${myKey}`;
  console.log(url);
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    data.items.forEach((item) => {
      saveSearch(item, 'currentSearch');
      bookCard(item); 
  })
  addSubmitListener('.saveBtn', data.items);
})
}


//Generate book card for each book
function bookCard(item) {
  const books = `
      <div class="book-card" id="${item.volumeInfo.title}">
      <div class="title-save">
      <h3>${item.volumeInfo.title}</h3> 
       <button class="saveBtn id="${item.id}">Save</button>
      </div>
       <img src="${item.volumeInfo.imageLinks.thumbnail} " alt="cover of ${item.volumeInfo.title}">
       <p class="author"><b>Author:</b> ${item.volumeInfo.authors}</p>
       <p clas="category"><b>Category:</b> ${item.volumeInfo.categories}</p>
       <p class="idNumber"><b>${item.volumeInfo.industryIdentifiers[0].type}:</b> ${item.volumeInfo.industryIdentifiers[0].identifier}</p>
    </div>`;
    results.insertAdjacentHTML("beforeend", books);
}

//Add event listener to a button

function addSubmitListener(q, target) {
  var buttons = document.querySelectorAll(q);
  buttons.forEach((button) => {
    console.log(button);
    var bookId = button.getAttribute('id');
    console.log(bookId);
    button.addEventListener('click', function(){
      saveBook((target[bookId]), 'savedBooks');
      console.log('listener added :)s');
    })
    
  })

}

function listInteractions(e) {
    if (e.target.name == 'add-btn')
    addToDo(e);

    if (e.target.name == 'checkbox') 
    checkToDo(e);

    if (e.target.name == 'remove-btn')
    deleteToDo(e);

}

//Filters 
function searchBy () {
  let searchQ = document.querySelector('input[name="searchType"]:checked').value
  return searchQ;
}

function searchFilter () {
  let filter = document.querySelector('input[name="filter"]:checked').value
  return filter;
}

function toggleNav() {
  var updateElement = document.getElementById("filter-list"); updateElement.classList.toggle("hidden");
}    


//Local Storage
const searchedBooks = [];
const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
const bookList = document.querySelector('.saved');

//Save current search to local storage
function saveSearch(item, location) {
  localStorage.removeItem(location);
  const newBook = {
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors,
    imageSource: item.volumeInfo.imageLinks.thumbnail,
    category: item.volumeInfo.categories,
    idType: item.volumeInfo.industryIdentifiers[0].type,
    id: item.volumeInfo.industryIdentifiers[0].identifier
  };
searchedBooks.push(newBook);
localStorage.setItem(location, JSON.stringify(searchedBooks));
}




//Save book to local storage
function saveBook(item, location) {
  console.log('time to save a book')
  const newBook = {
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors,
    imageSource: item.volumeInfo.imageLinks.thumbnail,
    category: item.volumeInfo.categories,
    idType: item.volumeInfo.industryIdentifiers[0].type,
    id: item.volumeInfo.industryIdentifiers[0].identifier
  };
savedBooks.push(newBook);
localStorage.setItem(location, JSON.stringify(savedBooks));
console.log(savedBooks);
//bookList.innerHTML= JSON.stringify(localStorage.getItem('savedBooks'));
}
















  /*
function saveBook(item, location) {
  alert(e.target.id);
    const newBook = {
      title: item.volumeInfo.title,
      author: item.volumeInfo.authors,
      imageSource: item.volumeInfo.imageLinks.thumbnail,
      category: item.volumeInfo.categories,
      idType: item.volumeInfo.industryIdentifiers[0].type,
      id: item.volumeInfo.industryIdentifiers[0].identifier
    };
  savedBooks.push(newBook);
  localStorage.setItem(location, JSON.stringify(savedBooks));
  console.log(savedBooks);
}


//Add event listener to a button
function addSubmitListener(q) {
  console.log('time to add listeners')
  var buttons = document.querySelectorAll(q);
  console.log(buttons);
  var i = 0, length = buttons.length;
  for (i; i < length; i++) {
    buttons[i].addEventListener("click", saveBook);
    console.log('listener added :)s')
    }; 
}

function filterBooks(items, q) {
  const filtered = items.filter(function (item) {
      if (item.title === q) {
          return item;
      }
  });
  console.log(filtered);
}

//filterBooks(savedBooks, 'Star Trek Cats')

  searchBooks(`https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:keyes&key=${myKey}`)
  
  
  new class Books {
    constructor() {
      //Get query from user input
      let myKey = 'AIzaSyDPR8cteFuQVST1bDSeXmc42TCeWggqyxo';
      let query = document.getElementById("book-name").value;
      this.baseUrl = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDPR8cteFuQVST1bDSeXmc42TCeWggqyxo`;
    }
    async getBooks() {
      // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
      const query = `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDPR8cteFuQVST1bDSeXmc42TCeWggqyxo`;
      this._books = await getJSON(query);
      return this._books;
    }
  
  
  }*/