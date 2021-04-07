export default
    class BooksView {
    renderBookList(bookList, resultsElement) {
        bookList.items.forEach(item => {
            if('imageLinks' in item.volumeInfo){
                
            }
            else {
                item.volumeInfo.imageLinks = '';
            }
            //saveSearch(item, 'currentSearch');
            bookCard(item, resultsElement);
        });
            /*.map(quake => {
                return `<li data-id=${quake.id}>
        <div><strong>Location:</strong> ${quake.properties.title}</div> 
        <div><strong>Date & Time:</strong> ${new Date(quake.properties.time)}</div>
        </li>`;
            })
            .join('');*/
    }

    rendersavedBookList() {
        const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
        const bookList = document.getElementById('saved');
        bookList.innerHTML="";
        savedBooks.forEach(book => {
            const books = `<div class="saved book-card" id="${book.id}">${book.content}</div>`;
            bookList.insertAdjacentHTML("beforeend", books);

            //Edit html for saved book cards
            //let savedIds = bookList.querySelectorAll('.idNumber');
            //savedIds.forEach(savedId => {savedId.remove()});
            //let savedCategories = bookList.querySelectorAll('.category');
            //savedCategories.forEach(category => {category.remove()});
            let buttonsToChange = bookList.querySelectorAll('.saveBtn');
            buttonsToChange.forEach(button => {button.classList.remove('saveBtn')});
            buttonsToChange.forEach(button => {button.classList.add('deleteBtn')});
            buttonsToChange.forEach(button => {button.innerHTML="delete"});

        });

            /*.map(quake => {
                return `<li data-id=${quake.id}>
        <div><strong>Location:</strong> ${quake.properties.title}</div> 
        <div><strong>Date & Time:</strong> ${new Date(quake.properties.time)}</div>
        </li>`;
            })
            .join('');*/
    }

    /*renderQuake(quake, element) {
        const quakeProperties = Object.entries(quake);
        // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier!
        element.innerHTML = quakeProperties
            .map(item => {
                if (item[0] === 'time' || item[0] === 'updated') {
                    return `<li>${item[0]}: ${new Date(item[1])}</li>`;
                } else return `<li>${item[0]}: ${item[1]}</li>`;
            })
            .join('');
    }*/
}


function bookCard(item, resultsElement) {
    const books = `
        <div class="book-card" id="${item.id}">
        <div class="title-save">
        <h3>${item.volumeInfo.title}</h3> 
         <button class="saveBtn" id="${item.id}">Save</button>
        </div>
         <img src="${item.volumeInfo.imageLinks.thumbnail}" alt="cover of ${item.volumeInfo.title}">
         <p class="author"><b>Author:</b> ${item.volumeInfo.authors}</p>
         <p class="category"><b>Category:</b> ${item.volumeInfo.categories}</p>
         <p class="idNumber"><b>${item.volumeInfo.industryIdentifiers[0].type}:</b> ${item.volumeInfo.industryIdentifiers[0].identifier}</p>
      </div>`;
    resultsElement.insertAdjacentHTML("beforeend", books);
}

function isEmpty(o) {
    return Object.entries(o).every(([k,v]) => v === null);
  }
  

