function getPeopleAPI(url) {
    return fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

//  View code
function renderPeopleList(people, peopleListElement) {
    // I decided to use a table to display my list of ships. The shipList Element is that table and it has 2 children: thead and tbody...we need to put our ships into tbody...so I reference the second child.
    const list = document.getElementById('people-list')
    list.innerHTML = "";
    //loop through the people
    people.forEach(function (person) {
      console.log(person);
      //create elements for list...tr
      let listItem = document.createElement("li");
      listItem.innerHTML =  ` 
      <h2 class="name">${person.name}</h2>
      <div class="card"> 
      <div class="info">
              <div>
                  <h3>Height</h3>
                  <p>${person.height}</p>
              </div>
              <div>
                  <h3>Homeworld</h3>
                  <p>${person.homeworld}</p>
              </div>
              <div>
                  <h3>Hair Color</h3>
                  <p>${person.hair_color}</p>
              </div>
      </div>
      </div>`;
  
    /*listItem.addEventListener("click", function (event) {
        //when clicked the default link behavior should be stopped, and the ship details function should be called...passing the value of the href attribute in
        event.preventDefault();
        getShipDetails(ship.url);
      });*/ 
  
      //add the list item to the list
      list.appendChild(listItem);
    });
  }

  // controller code
  function showPeople(url = "https://swapi.dev/api/people/") {
    getPeopleAPI(url).then(function (data) {
      console.log(data);
      const results = data.results;
  
      //get the list element
      const peopleListElement = document.getElementById("people-list");
      renderPeopleList(results, peopleListElement);
  
      // enable the next and prev buttons.
      if (data.next) {
        const next = document.getElementById("next");
        // normally we would prefer the addEventListener method of adding a listener. Using something like 'element.onEvent = event_function' has the limitation of only being able to hold one listener of the type we choose. In this case that is a good thing however. Because we are not re-creating the buttons each time we load a new batch of data we could end up with several listeners attached to each button by the last page. We won't have that issue here.
        next.onclick = () => {
          // notice to show the next page we just re-call the showShips function with a new URL
          showPeople(data.next);
        };
      }
      if (data.previous) {
        const prev = document.getElementById("prev");
  
        prev.onclick = () => {
          showPeople(data.previous);
        };
      }
    });
  }

  showPeople();

/* 
const parent = document.getElementById('people-list');

function makePeopleList(parent, people) {
    people.forEach(person => {
        const item = document.createElement('li');
        item.classList.add('light');
        // setting this to make getting the details for a specific hike easier later.
        item.setAttribute('data-name', person.name);
        item.innerHTML = ` 
        <h2 class="name">${person.name}</h2>
        <div class="card"> 
        <div class="info">
                <div>
                    <h3>Height</h3>
                    <p>${person.height}</p>
                </div>
                <div>
                    <h3>Homeworld</h3>
                    <p>${person.homeworld}</p>
                </div>
                <div>
                    <h3>Hair Color</h3>
                    <p>${person.hair_color}</p>
                </div>
        </div>
        </div>`;
        item.classList.add('person');
        parent.appendChild(item);
    });
    
    
  
    $('#people-list').pagination({ // you call the plugin
  
      dataSource:  makePeopleList(parent, people), // pass all the data
      pageSize: 10, // put how many items per page you want
      callback: function(data, pagination) {
          // data will be chunk of your data (json.Product) per page
          // that you need to display
          var wrapper = $('#people-list .wrapper').empty();
          $.each(data, function (i, f) {
             $('#list .wrapper').append('<ul><li>Key1: ' + f.Key1 + '</li></ul>');
          });
        }
       });  
    

}

(async function getPeople() {

  //Utility Functions for fetch
  const urls = ["https://swapi.dev/api/people/"];
  const checkStatus = res => res.ok ? Promise.resolve(res) : Promise.reject(new Error(res.statusText));
  const parseJSON = response => response.json();

  // Get a single endpoint.
  const getPage = url => fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => console.log("There was a problem!", error));

  // Keep getting the pages until the next key is null.
  const getAllPages = async (url, collection = []) => {
    const { results, next } = await getPage(url);
    collection = [...collection, ...results];
    if (next !== null) {
      return getAllPages(next, collection);
    }
    return collection;
  }    

  // Select data out of all the pages gotten.
  const [ people ] = await Promise.all(urls.map(url => getAllPages(url)));
  makePeopleList(parent, people);
})();
 */





 /* // controller code
 function showPeople(url = "https://swapi.dev/api/people/") {
  getPeople(url).then(function (data) {
    console.log(data);
    const results = data.results;

    //get the list element
    const peopleListElement = document.getElementById("people-list");
    makePeopleList(results, peopleListElement);

    // enable the next and prev buttons.
    if (data.next) {
      const next = document.getElementById("next");
      // normally we would prefer the addEventListener method of adding a listener. 
      // Using something like 'element.onEvent = event_function' has the limitation 
      //of only being able to hold one listener of the type we choose. 
      //In this case that is a good thing however. 
      //Because we are not re-creating the buttons each time we load a
      // new batch of data we could end up with several listeners attached to each 
      //button by the last page. We won't have that issue here.
      next.ontouchend = () => {
        // notice to show the next page we just re-call the showShips function with a new URL
        showShips(data.next);
      };
    }
    if (data.previous) {
      const prev = document.getElementById("prev");

      prev.ontouchend = () => {
        showShips(data.previous);
      };
    }
  });
} */