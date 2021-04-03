var results = document.getElementById("results");
let myKey = 'AIzaSyDPR8cteFuQVST1bDSeXmc42TCeWggqyxo';
let searchBtn = document.getElementById("search");
  
searchBtn.addEventListener("click", searchBooks);

function searchBooks() {
  var results = "";
  var results = document.getElementById("results");
  let options = {method: 'GET'};
  let searchQ = searchBy();
  let filter = searchFilter();
  let query = document.getElementById("user-query").value;
  let url = `https://www.googleapis.com/books/v1/volumes?q=${searchQ}${query}${filter}&startIndex=0&maxResults=40&key=${myKey}`;
  console.log(url);
  fetch(url, options)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    
    data.items.forEach((item) => {
      console.log(item);
      const books = `
      <div class="book-card">
      <div class="title-save">
      <h3>${item.volumeInfo.title}</h3> 
       <button>Save</button>
      </div>
       <img src="${item.volumeInfo.imageLinks.thumbnail} " alt="cover of ${item.volumeInfo.title}">
       <p class="author"><b>Author:</b> ${item.volumeInfo.authors}</p>
       <p clas="category"><b>Category:</b> ${item.volumeInfo.categories}</p>
       <p class="idNumber"><b>${item.volumeInfo.industryIdentifiers[0].type}:</b> ${item.volumeInfo.industryIdentifiers[0].identifier}</p>
    </div>`;
    results.insertAdjacentHTML("beforeend", books);
    })
  }) 
}

function searchBy () {
  let searchQ = document.querySelector('input[name="searchType"]:checked').value
  console.log(searchQ);
  return searchQ;
}

function searchFilter () {
  let filter = document.querySelector('input[name="filter"]:checked').value
  console.log(filter);
  return filter;
}

function toggleNav() {
  var updateElement = document.getElementById("filter-list"); updateElement.classList.toggle("hidden");
}     




  /*
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