//create an array of hikes to be exported
const hikeList = [
    {
        name: "Bechler Falls",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description:
            "Beautiful short hike along the Bechler river to Bechler Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
        name: "Teton Canyon",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "3 miles",
        difficulty: "Easy",
        description: "Beautiful short (or long) hike through Teton Canyon.",
        directions:
            "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
        name: "Denanda Falls",
        imgSrc: "falls.jpg",
        imgAlt: "Image of Bechler Falls",
        distance: "7 miles",
        difficulty: "Moderate",
        description:
            "Beautiful hike through Bechler meadows river to Denanda Falls",
        directions:
            "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
];


const imgBasePath = "//byui-cit.github.io/cit261/examples/";
export class Hikes {
    //Lets us access data without exporting it
    getAllHikes() {
        return hikeList;
    }

    //show a list of hikes in the parentElement
    showAllHikes() {
        this.parentElement.innerHTML = '';
        makeHikeList(this.parentElement, this.getAllHikes());
        this.addHikeListener();
        this.backButton.classList.add('hidden');
    }

    
    // show one hike with full details in the parentElement
    showOneHike(hikeName) {
        const hike = this.getAllHikes().find(hike => hike.name === hikeName);
        this.parentElement.innerHTML = '';
        this.parentElement.appendChild(detailedHike(hike));
        // show the back button
        this.backButton.classList.remove('hidden');
    }

    //add event listener to each hike
    addHikeListener() {
        // convert items to an array so we can add event listener
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('click', e => {
                // why currentTarget instead of target? to make sure we get the element the event listener is attached
                this.showOneHike(e.currentTarget.dataset.name);
                console.log(this);
            });
        });
    }

    //selecting parent of element to build a back button in
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        this.backButton = this.buildBackButton();
    }

    buildBackButton() {
        const backButton = document.createElement('button');
        backButton.innerHTML = 'Back to All Hikes';
        backButton.addEventListener('click', () => {
            this.showAllHikes();
        });
        //puts button before element
        this.parentElement.before(backButton);
        return backButton;
    }
}
// End of Hikes class

//Methods for building html
function makeHikeList (parent, hikes) {
    hikes.forEach(hike => {
        const item = document.createElement('li');
        item.classList.add('light');
        // setting this to make getting the details for a specific hike easier later.
        item.setAttribute('data-name', hike.name);
        item.innerHTML = ` 
        <h2 class="name">${hike.name}</h2>
        <div class="card"> 
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div class="info">
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>
        </div>`;
        item.classList.add('hike');
        parent.appendChild(item);  
    });
}


function detailedHike(hike) {
    const item = document.createElement('li');
    item.innerHTML = ` 
    <h2 class="name">${hike.name}</h2>
    <div class="card"> 
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
    <div class="info">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>How to get there</h3>
                <p>${hike.directions}</p>
            </div>
    </div>
    </div>`;
    return item;
}


