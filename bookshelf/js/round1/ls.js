const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
const commentList = document.querySelector('.saved');


export function addSubmitListener(q) {
  const submit = document.querySelector(q);
  submit.addEventListener('click', addComment, false);  
}

export function renderBookList(comments = [], element) {
  element.innerHTML = '';
  element.innerHTML = `<h3>Comments</h3>` + savedBooks.map((item, i) => {
    return     `
    <div class="book-card saved-book">
    <div class="title-save">
    <h3>${item.volumeInfo.title}</h3> 
     <button>Save</button>
    </div>
     <img src="${item.volumeInfo.imageLinks.thumbnail} " alt="cover of ${item.volumeInfo.title}">
     <p class="author"><b>Author:</b> ${item.volumeInfo.authors}</p>
     <p clas="category"><b>Category:</b> ${item.volumeInfo.categories}</p>
     <p class="idNumber"><b>${item.volumeInfo.industryIdentifiers[0].type}:</b> ${item.volumeInfo.industryIdentifiers[0].identifier}</p>
  </div>`;
  }).join('');
  }

export function filterComments(items, q, element) {
  const filtered = items.filter(function (item) {
      if (item.name === q) {
          return item;
      }
  });
  renderCommentList(filtered, element);
}


function addComment(e) {
const commentInput = document.querySelector('.comment-input');
const hikeName = document.querySelector('.hike-name');
 e.preventDefault();
  const newComment = {
    name: hikeName.value,
    date: new Date(),
    content: commentInput.value
  };

  // If the value is nothing just return
  if (commentInput.value === '') return false;

  if (commentInput.value !== '') {
  
  //Write comment to local storage
  comments.push(newComment);
  localStorage.setItem('hikes', JSON.stringify(comments));

  // Reset textrea value
  commentInput.value = "";

//show updated list
  filterComments(comments, newComment.name, commentList);


  }


}