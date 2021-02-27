import {addToDo, checkToDo, deleteToDo, resetList} from "./ls.js";

export function listInteractions(e) {
    if (e.target.name == 'add-btn')
    addToDo(e);

    if (e.target.name == 'checkbox') 
    checkToDo(e);

    if (e.target.name == 'remove-btn')
    deleteToDo(e);

}