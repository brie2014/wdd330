import {showAll} from "./toDo.js";
import {addToDo} from "./ls.js";
import {handleClick} from "./utilities.js";

//Selectors
const addBtn = document.querySelector('.add-items');
const listButtons = document.querySelector('ul');
const resetBtn = document.getElementById('reset-btn');
const filterButtons = document.getElementById('filter-btns');


//Calling Functions
showAll();
addBtn.addEventListener('submit', addToDo);
listButtons.addEventListener('click', handleClick);
resetBtn.addEventListener('click', handleClick);
filterButtons.addEventListener('click', handleClick);













