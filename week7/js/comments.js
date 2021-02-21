const comments = JSON.parse(localStorage.getItem('hikes')) || [];
const commentList = document.querySelector('.comments');


export function addSubmitListener(q) {
  const submit = document.querySelector(q);
  submit.addEventListener('click', addComment, false);  
}

export function renderCommentList(comments = [], element) {
  element.innerHTML = '';
  element.innerHTML = `<h3>Comments</h3>` + comments.map((comment, i) => {
    return     `<div class="comment">
    <h4>${comment.name}</h4>
        <div">
          <p class="comment-date">Date: ${comment.date}</p>
          <p class="comment-body">Comment: ${comment.content}</p>
        </div>
      </div>
    </div>
    `;
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