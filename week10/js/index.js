import QuakesController from './QuakesController.js';

//const el = document.getElementById('#quakeList');

const Quake = new QuakesController('#quakeList');
Quake.init();

console.log(Quake)