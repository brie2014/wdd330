import { populateList, getItems, getList } from "./ls.js";

const toDoList = getList();

//Function to filter list
export function filterList(e) {

    if (e.target.id == 'all')
        showAll();

    if (e.target.id == 'active')
        showActive();

    if (e.target.id == 'completed')
        showCompleted();
}

//Individual filter functions
function showActive(e) {
    const items = getItems();
    const active = items.filter(function (item) {
        if (item.done === false) {
            return item;
        }
    });
    populateList(active, toDoList);
}

function showCompleted(e) {
    const items = getItems();
    const complete = items.filter(function (item) {
        if (item.done !== false) {
            return item;
        }
    });
    populateList(complete, toDoList);
}

export function showAll(e) {
    const items = getItems();
    populateList(items, toDoList);
}

