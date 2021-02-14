import {showActive, showCompleted, showAll} from "./toDo.js";
import {addToDo, checkToDo, deleteToDo, resetList} from "./ls.js";

//Main Function
function handleClick(e) {
    if (e.target.id == 'add-btn')
    addToDo(e);

    if (e.target.name == 'checkbox') 
    checkToDo(e);

    if (e.target.name == 'remove-btn')
    deleteToDo(e);

    if (e.target.id == 'reset-btn')
    resetList(e)

    if (e.target.id == 'all')
    showAll();

    if (e.target.id == 'active') 
    showActive();
    
    if (e.target.id == 'completed')
    showCompleted();
}

export {handleClick}