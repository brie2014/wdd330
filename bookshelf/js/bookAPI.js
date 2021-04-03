import { getJSON } from './utilities.js';
// Quake Model


export default class Books {
  constructor() {
    //Get start and end dates for query from user input
    const search = document.getElementById('book-name').value;
    this.baseUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}`;
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._books = [];
    console.log(this._books);
  }


}