import Hikes from "./hikes.js";
//on load grab the array and insert it into the page
const myHikes = new Hikes("hikes");
window.addEventListener("load", () => {
  myHikes.showAllHikes();
});


/*We were able to get it to render the list of hikes, but I could not get the stretch goals without following along with the solution; this is my original code;

import {hikeList} from './hikes.js';
const imgBasePath = "//byui-cit.github.io/cit261/examples/";
const hikes = document.getElementById('hikes');

/*Build Back Button that is hidden
function buildButton() {
  const backButton = document.createElement('button');
  backButton.classList.add('hidden');
  backButton.innerHTML = 'Back'
  hikes.appendChild(backButton);

}


//Build full list of hikes
function allHikes(list) {
  for (let i = 0; i < list.length; i++) {
      const item = document.createElement("li");
      item.innerHTML = `
      <h2 class="name">${list[i].name}</h2>
      <div class="card">
      <div class="image"><img src="${imgBasePath}${list[i].imgSrc}" alt="${list[i].imgAlt}"></div>
      <div class="info">
              <div>
                  <h3>Distance</h3>
                  <p>${list[i].distance}</p>
              </div>
              <div>
                  <h3>Difficulty</h3>
                  <p>${list[i].difficulty}</p>
              </div>
      </div>
      </div>`;
      item.classList.add('hike');
      item.setAttribute('id', `${i}`)
      hikes.appendChild(item);
  }
  buildButton();
}

allHikes(hikeList); 


//Show full details of hike
function buildFullHike(hike) {
    console.log(this);
        const i = 0;
        const item = document.createElement("li");
        hike = hikeList[i];
        console.log(hike);
        item.innerHTML = ` 
        <h2 class="name">${hike[i].name}</h2>
        <div class="card"> 
        <div class="image"><img src="${imgBasePath}${hike[i].imgSrc}" alt="${hike[i].imgAlt}"></div>
        <div class="info">
                <div>
                    <h3>Distance</h3>
                    <p>${hike[i].distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike[i].difficulty}</p>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>${hike[i].description}</p>
                </div>
                <div>
                    <h3>Directions</h3>
                    <p>${hike[i].directions}</p>
                </div>
        </div>
        </div>`;
        hikes.appendChild(item);
        backButton.classList.remove('hidden');
}

*/