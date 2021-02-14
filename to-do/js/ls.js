const items = JSON.parse(localStorage.getItem('items')) || [];
const toDoList = document.querySelector('.toDoList');

function addToDo(e) {
    e.preventDefault();
const id = new Date();
const text = (this.querySelector('[name=item]')).value;
const item = {
  id,  
  text,
  done: false
  }
  items.push(item);
  populateList(items, toDoList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();

}


function checkToDo(e) {
   let item = e.target.parentNode; 
   const el = e.target;
   const index = el.dataset.index;
   if(!e.target.matches('input')) return; 
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, toDoList);
}

function deleteToDo(e) {
    let item = e.target.parentNode; 
    let data = item.getAttribute('id');
    item.remove(); 
    items.splice(`${data}`, 1);
    localStorage.setItem('items', JSON.stringify(items));
}


function resetList(e) {
    console.log('time to reset');
    localStorage.clear();
    location.reload();

}

function populateList(items = [], toDoList) {
    toDoList.innerHTML = items.map((item, i) => {
      return `
      <li class="list-item" id="${i}">
        <div>
        <input class='checkbox' name="checkbox" type="checkbox" data-index=${i} id="items${i}" ${item.done ? 'checked' : ''}/>
        <label for="items${i}">${item.text}</label>
        </div>
        <button name="remove-btn" type=button class="remove-btn">X</button>
      </li>
      `;
    }).join('');
    }

export {addToDo, checkToDo, deleteToDo, resetList, populateList}
