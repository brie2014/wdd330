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



/*Things to Fix

-styling in different screen sizes
-nicer fonts, button styles, etc.
-reload list in filtered view when item is checked or deleted, without it going back to all view
-count of items still to do
-

*/














