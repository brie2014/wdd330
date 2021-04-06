export default
    class BooksView {
    renderBookList(bookList, resultsElement) {
        bookList.items.forEach(item => {
            saveSearch(item, 'currentSearch');
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
        savedBooks.forEach(book => {
            const books = `<div class="saved book-card" id="${book.id}">${book.content}</div>`;
            bookList.insertAdjacentHTML("beforeend", books);
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
         <button class="saveBtn id="${item.id}">Save</button>
        </div>
         <img src="${item.volumeInfo.imageLinks.thumbnail} " alt="cover of ${item.volumeInfo.title}">
         <p class="author"><b>Author:</b> ${item.volumeInfo.authors}</p>
         <p clas="category"><b>Category:</b> ${item.volumeInfo.categories}</p>
         <p class="idNumber"><b>${item.volumeInfo.industryIdentifiers[0].type}:</b> ${item.volumeInfo.industryIdentifiers[0].identifier}</p>
      </div>`;
    resultsElement.insertAdjacentHTML("beforeend", books);
}

function savedBookCard(item, resultsElement) {
    const books = `
        <div class="book-card" id="${item.id}">
        <div class="title-save">
        <h3>${item.volumeInfo.title}</h3> 
         <button class="deleteBtn id="${item.id}">Delete</button>
        </div>
         <img src="${item.volumeInfo.imageLinks.thumbnail} " alt="cover of ${item.volumeInfo.title}">
         <p class="author"><b>Author:</b> ${item.volumeInfo.authors}</p>
      </div>`;
    resultsElement.insertAdjacentHTML("beforeend", books);
}




//Save current search to local storage
function saveSearch(item, location) {
    const searchedBooks = [];
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



