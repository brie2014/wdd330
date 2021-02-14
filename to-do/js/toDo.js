import {populateList} from "./ls.js";

const items = JSON.parse(localStorage.getItem('items')) || [];
const toDoList = document.querySelector('.toDoList');


function showActive(e) {
    const active = items.filter(function (item) {
        if (item.done === false) {
            return item;
        }
    });
    populateList(active, toDoList);
}

function showCompleted(e) {
    const complete = items.filter(function (item) {
        if (item.done !== false) {
            return item;
        }
    });
    populateList(complete, toDoList);
}

function showAll(e) {
    populateList(items, toDoList);
}

export {showActive, showCompleted, showAll}