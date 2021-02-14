/*const list = new toDo ("toDoList");
window.addEventListener("load", () => {
    list.showAllItems();
  });


const items = JSON.parse(localStorage.getItem('items')) || [];
const addItems = document.querySelector('.add-items');
const toDoList = document.querySelector('.toDoList');
const removeItems = document.querySelector('.add-items');

export default class toDo {
    //Constructor 


    //Getter: Gets us access data without exporting it
    getAllItems() {
        return items;
    };

    //Generator: builds to do list from local storage
    showAllItems() {
        populateList()
    }

    //Method: 

    addItem() {
        e.preventDefault();
        const text = (this.querySelector('[name=item]')).value;
        const item = {
            text,
            done: false
        }
        items.push(item);
        populateList(items, itemsList);
        localStorage.setItem('items', JSON.stringify(items));
        this.reset();

    }

    removeItem() {

    }

}


//Methods for building page

function populateList(items = [], toDoList) {
    toDoList.innerHTML = items.map((item, i) => {
        return `
      <li class="list-item">
        <div> 
        <input type="checkbox" data-index=${i} id="items${i}" ${item.done ? 'checked' : ''}/>
        <label for="items${i}">${item.text}</label>
        </div>
        <button type=button class="remove-btn">X</button>
      </li>
      `;
    }).join('');
}

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}


function removeItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    localStorage.removeItem(`${item}`)
}


function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);

}





/*
const items = JSON.parse(localStorage.getItem('items')) || [];
const addItems = document.querySelector('.add-items');
const toDoList = document.querySelector('.toDoList');
const removeItems = document.querySelector('.add-items');

function addItem (e) {
e.preventDefault();
const text = (this.querySelector('[name=item]')).value;
const item = {
  text,
  done: false
  }
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function removeItem (e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
      text,
      done: false
      }
localStorage.removeItem(`${item}`)
    }


function toggleDone(e) {
if(!e.target.matches('input')) return;
const el = e.target;
const index = el.dataset.index;
items[index].done = !items[index].done;
localStorage.setItem('items', JSON.stringify(items));
populateList(items, itemsList);

}

addItems.addEventListener('submit', addItem);
removeItems.addEventListener('button', removeItem);
toDoList.addEventListener('click', toggleDone);

populateList(items, toDoList);

function populateList(items = [], toDoList) {
    toDoList.innerHTML = items.map((item, i) => {
      return `
      <li class="list-item">
        <div>
        <input type="checkbox" data-index=${i} id="items${i}" ${item.done ? 'checked' : ''}/>
        <label for="items${i}">${item.text}</label>
        </div>
        <button type=button class="remove-btn">X</button>
      </li>
      `;
    }).join('');
    }
    */