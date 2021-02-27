import {filterList, showAll} from "./filters.js";
import {addToDo, resetList} from "./ls.js";
import {listInteractions} from "./utilities.js";

//Selectors
const addBtn = document.querySelector('.add-items');
const listButtons = document.querySelector('ul');
const resetBtn = document.getElementById('reset-btn');
const filterButtons = document.getElementById('filter-btns');



//Calling Functions

//populate starting list
showAll();
//attach functions to each button
addBtn.addEventListener('submit', addToDo);
listButtons.addEventListener('click', listInteractions);
resetBtn.addEventListener('click', resetList);
filterButtons.addEventListener('click', filterList);

/*Ideas to Improve
-styling in different screen sizes
-nicer fonts, button styles, etc.
-count of items still left to do
-styling to show what filter is on
*/














