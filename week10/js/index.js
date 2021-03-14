import QuakesController from './QuakesController.js';

let button = document.getElementById('find-quakes');


button.addEventListener("click", () => {
    const Quake = new QuakesController('#quakeList');
    Quake.init()
    } )