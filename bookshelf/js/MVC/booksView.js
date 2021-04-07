export default
    class BooksView {
    renderBookList(bookList, resultsElement) {
        bookList.items.forEach(item => {
            checkProperties(item);
            bookCard(item, resultsElement);
        });
    }

    rendersavedBookList() {
        const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
        const bookList = document.getElementById('saved');
        bookList.innerHTML="";
        savedBooks.forEach(book => {
            const books = `<div class="saved book-card" id="${book.id}">${book.content}</div>`;
            bookList.insertAdjacentHTML("afterbegin", books);

            //Edit html for saved book cards
            let savedIds = bookList.querySelectorAll('.idNumber');
            savedIds.forEach(savedId => {savedId.remove()});
            let savedCategories = bookList.querySelectorAll('.category');
            savedCategories.forEach(category => {category.remove()});
            let buttonsToChange = bookList.querySelectorAll('.saveBtn');
            buttonsToChange.forEach(button => {button.classList.remove('saveBtn')});
            buttonsToChange.forEach(button => {button.classList.add('deleteBtn')});
            buttonsToChange.forEach(button => {button.innerHTML="delete"});
        });
    }
}

//Script to generate each bookcard
function bookCard(item, resultsElement) {
    console.log(item.volumeInfo.infoLink);
    const books = `
        <div class="book-card" id="${item.id}">
        <div class="title-save">
        <a href="${item.volumeInfo.infoLink}" target="_blank">
        <h3>${item.volumeInfo.title}</h3> 
        </a>
         <button class="saveBtn" id="${item.id}">Save</button>
        </div>
         <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="cover of ${item.volumeInfo.title}">
         <p class="author"><b>Author:</b> ${item.volumeInfo.authors}</p>
         <p class="category"><b>Category:</b> ${item.volumeInfo.categories}</p>
         <p class="idNumber"><b>${item.volumeInfo.industryIdentifiers[0].type}:</b> ${item.volumeInfo.industryIdentifiers[0].identifier}</p>
         <div class="viewMore">
         Show Description
         </div>
         <p class="description hidden">${item.searchInfo.textSnippet}</p>
      </div>
      `;
    resultsElement.insertAdjacentHTML("beforeend", books);
}

//Checking to make sure each property is there
function checkProperties (item) {
    if('imageLinks' in item.volumeInfo){}
            else {
                item.volumeInfo.imageLinks = '';
            }
            if( 'searchInfo' in item){}
            else {
                item.searchInfo = 'no description available'
            }
            if( 'industryIdentifiers' in item.volumeInfo){}
            else {
                item.volumeInfo.industryIdentifiers = 'no id available'
            }
}
  

