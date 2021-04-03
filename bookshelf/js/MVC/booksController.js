import { getLocation } from './utilities.js';
import Quake from './Quake.js';
import QuakesView from './QuakesView.js';

// Quake controller
export default class BooksController {
  constructor(parent, position = null) {
    this.parent = parent;
    // sometimes the DOM won't exist/be ready when the Class gets instantiated, so we will set this later in the init()
    this.parentElement = null;
    // this is how our controller will know about the model and view...we add them right into the class as members.
    this.quakes = new Book();
    this.quakesView = new BooksView();
  }
  
  async init() {
    // use this as a place to grab the element identified by this.parent, do the initial call of this.initPos(), and display some quakes by calling this.getQuakesByRadius()
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(100);
  }
  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        var positions = await getLocation();
        // if we get the location back then set the latitude and longitude into this.position
        this.position.lat = positions.coords.latitude;
        this.position.lon = positions.coords.longitude;
        
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getQuakesByRadius(radius) {
    // this method provides the glue between the model and view. Notice it first goes out and requests the appropriate data from the model, then it passes it to the view to be rendered.
    //set loading message
    this.parentElement.innerHTML = '<li>Loading...</li>';
    //get radius from user input
    radius = document.getElementById('radius').value;
    if (radius === '') {radius = 100};
    // get the list of quakes in the specified radius of the location
    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      radius
    );
    // render the list to html
    this.quakesView.renderQuakeList(quakeList, this.parentElement);

    // add a listener to the new list of quakes to allow drill down in to the details
    //this.addQuakeListener(); 
  }


    //add event listener to each quake...why is this not working??
    async addQuakeListener() {
        // convert items to an array so we can add event listener
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('click', e => {
                this.getQuakeDetails(e.target.dataset.name);
                console.log(e.target.dataset.name);
            });
        });
        
    }

  async getQuakeDetails(quakeId) {
    // get the details for the quakeId provided from the model, then send them to the view to be displayed
    var quakes = this.quakes.getQuakeById(quakeId);
    //console.log(quakes);
    this.quakesView.renderQuake(quakes, this.parentElement);
  }
}