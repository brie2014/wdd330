const toDoList = getList();

//Get list element from document
export function getList() {
  return document.querySelector('.toDoList');
}

//Get list items from local storage
export function getItems() {
  return JSON.parse(localStorage.getItem('items')) || [];
}

//Add item to localstorage and list
export function addToDo(e) {
  const items = getItems();
  e.preventDefault();
  const id = new Date();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    id,
    text,
    done: false
  }
  items.push(item);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, toDoList);
  this.reset();
}

//Check item off in localstorage and list
export function checkToDo(e) {
  const items = getItems();
  const el = e.target;
  const index = el.dataset.index;
  if (!e.target.matches('input')) return;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, toDoList);
}

//Delete item from localstorage and list
export function deleteToDo(e) {
  const items = getItems();
  let item = e.target.parentNode;
  let data = item.getAttribute('id');
  item.remove();
  items.splice(`${data}`, 1);
  localStorage.setItem('items', JSON.stringify(items));
}

//Clear whole list
export function resetList(e) {
  console.log('time to reset');
  localStorage.clear();
  location.reload();
}

//Render list from localstorage
export function populateList(items = [], toDoList) {
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