class Vehicle {
    //build instance of vehicle
    constructor(name, wheels, topSpeed, color, elementID) {
        this.name = name;
        this.wheels = wheels;
        this.topSpeed = topSpeed;
        this.color = color;
        this.message = `This ${this.color} vehicle has ${this.wheels} wheels and can go ${this.topSpeed} miles per hour`;
        this.parentElement = document.getElementById(elementID);
        this.showVehicleInfo();

    }

    //function to build HTML for each instance of the vehicle
    showVehicleInfo() {
        const vehicleInfo = document.createElement('div');
        vehicleInfo.classList.add('card');
        vehicleInfo.innerHTML = `<h4 class='vehicle-name'>${this.name}</h4> <p> ${this.message}</p>`;
        this.parentElement.appendChild(vehicleInfo);;
    }

}

//Add function to submit button
const submit = document.querySelector('.submit');
submit.addEventListener('click', addVehicle);

//Add vehicle to local storage
function addVehicle(e) {
    const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    const name = document.getElementById('name').value;
    const wheels = document.getElementById('wheels').value;
    const speed = document.getElementById('speed').value;
    const color = document.getElementById('color').value;
    e.preventDefault();
    const newVehicle = {
        name: name,
        wheels: wheels,
        speed: speed,
        color: color
    }

    //Write comment to local storage
    vehicles.push(newVehicle);
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    location.reload();

}

//Starter vehicles
const tricycle = new Vehicle('Tricycle', 3, 20, 'red', 'vehicles');
const fourWheeler = new Vehicle('Four Wheeler', 4, 50, 'blue', 'vehicles');

//Get list of other vehicles out of storage
const vehicles = JSON.parse(localStorage.getItem('vehicles')) || [];

//Create an instance of the class for each vehicle
const vehicleList = vehicles.forEach(vehicle =>
    new Vehicle(vehicle.name, vehicle.wheels, vehicle.speed, vehicle.color, 'vehicles'));

