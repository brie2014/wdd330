import { getJSON } from './utilities.js';

//Books Model
export default class Books {
    constructor() {
        this.input = document.getElementById("user-query").value;
        this.savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
        //Setup url
        this.baseUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
    }

    async searchBooks() {
        //get search terms from user input
        let options = { method: 'GET' };
        const searchQ = searchBy();
        const filter = searchFilter();
        const input = document.getElementById("user-query").value;
        if (input === '') { window.alert('Please enter search terms to search.') };
        let myKey = 'AIzaSyDPR8cteFuQVST1bDSeXmc42TCeWggqyxo';
        // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._booksearch, then return it
        const query = this.baseUrl + `${searchQ}${input}${filter}&startIndex=0&maxResults=40&key=${myKey}`;
        console.log(query);
        this.bookSearch = await getJSON(query);
        return this.bookSearch;
    }

}


//Filters 
function searchBy() {
    let searchQ = document.querySelector('input[name="searchType"]:checked').value
    return searchQ;
}

function searchFilter() {
    let filter = document.querySelector('input[name="filter"]:checked').value
    return filter;
}

